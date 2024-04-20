/* eslint-disable @typescript-eslint/no-unused-vars */
import './app.css';
import { State } from '../types/types';
import { Connect } from '../api/connect';
import state, { subscribe } from '../state/state';
import { Page } from './components/component/page';
import { session } from './components/Session/session';
import { PageChat } from './components/pages/chat/chat-view';
import { Component } from './components/component/component';
import { PageLogin } from './components/pages/login/login-view';
import { PageAbout } from './components/pages/about/about-view';
import { LoginController } from './components/pages/login/login-controller';
import { BlockUIMessage } from './components/component/block-UI-message/block-UI-message';

const NO_COMMUNICATION = 'NO COMMUNICATION WITH THE SERVER';
const connect = Connect.getInstance();

export class App {
  loginController: LoginController;

  pageChat: Page | undefined;

  node: Component;

  constructor() {
    this.loginController = new LoginController();
    this.node = new Component({ classNames: ['app'] });
    this.init();
  }

  private init(): void {
    window.location.hash = '';
    window.addEventListener('hashchange', () => this.router());
    connect.subscribe('close', () => this.handleDisconnect());
    connect.subscribe('open', () => this.handleConnect());
    subscribe('currentPage', () => (window.location.hash = state.currentPage));
    window.location.hash = state.currentPage;
    document.title = state.pages[state.currentPage].title;
  }

  private router(): void {
    switch (this.getHash()) {
      case 'about':
        this.openPage(PageAbout.getInstance());
        break;
      case 'login':
        const sessionState = session.read();
        if (sessionState) {
          this.restoreState(sessionState);
        } else {
          this.openPage(PageLogin.getInstance());
        }
        break;
      case 'chat':
        this.openPage(PageChat.getInstance());
        break;
      default:
        window.location.hash = 'chat';
        break;
    }
  }

  private getHash(): string {
    const { login, password } = state.user;
    const isLogined = login.length > 0 && password.length > 0;
    let hash = window.location.hash.slice(1);
    if (hash === 'about') return hash;
    if (!isLogined) hash = 'login';
    window.location.hash = hash;
    return hash;
  }

  private openPage(page: Page): void {
    document.title = `${state.pages[state.currentPage].title} ${state.user.login}`;
    page.render(this.node.getNode());
  }

  private restoreState(sessionState: State): void {
    sessionState.user.isLogined = false;
    sessionState.user.isRequested = false;
    state.user = sessionState.user; // restore auth
    window.location.hash = 'chat'; // redirect to chat page
    // but chat page not exist yet, so wait...
    setTimeout(() => {
      // now we can request update and rerender chat
      state.currentUser = sessionState.currentUser;
      state.chat = sessionState.chat;
    }, 0);
  }

  private handleDisconnect(): void {
    state.user.isLogined = false;
    state.user.isRequested = false;
    state.chat = {};
    state.currentUser = '';
    const block = BlockUIMessage.getInstance();
    block.show(NO_COMMUNICATION);
  }

  private handleConnect(): void {
    if (!state.user.isLogined) this.loginController?.requestAuthUser();
    const message = BlockUIMessage.getInstance();
    message.hide();
  }
}
