/* eslint-disable @typescript-eslint/no-unused-vars */
import './app.css';
import { Connect } from '../api/connect';
import state, { subscribe } from '../state/state';
import { session } from './components/Session/session';
import { PageLogin } from './components/pages/login/login';
import { PageChat } from './components/pages/chat/chat-view';
import { Component } from './components/component/component';
import { State } from '../types/types';

const connect = new Connect();

export class App {
  pageLogin: PageLogin | undefined;

  pageChat: PageChat | undefined;

  node: Component;

  constructor() {
    window.location.hash = '';
    this.pageLogin = PageLogin.getInstance();
    this.node = new Component({ classNames: ['app'] });
    window.addEventListener('hashchange', () => this.router());
    subscribe('currentPage', () => (window.location.hash = state.currentPage));
    window.location.hash = state.currentPage;
    document.title = state.pages[state.currentPage].title;
  }

  private router(): void {
    switch (this.getHash()) {
      case 'login':
        const sessionState = session.read();
        if (sessionState) {
          this.restoreState(sessionState);
        } else {
          this.openPageLogin();
        }
        break;
      case 'chat':
        this.openPageChat();
        break;
      default:
        window.location.hash = 'chat';
        break;
    }
  }

  private getHash(): string {
    const { login, password } = state.user;
    const hash = login.length > 0 && password.length > 0 ? window.location.hash.slice(1) : 'login';
    window.location.hash = hash;
    return hash;
  }

  private openPageChat(): void {
    document.title = `${state.pages[state.currentPage].title}: ${state.user.login}`;
    this.pageChat = PageChat.getInstance();
    this.pageChat.render(this.node.getNode());
  }

  private openPageLogin(): void {
    document.title = state.pages[state.currentPage].title;
    this.pageLogin = PageLogin.getInstance();
    this.pageLogin.render(this.node.getNode());
  }

  private restoreState(sessionState: State): void {
    state.user = sessionState.user; // restore auth
    window.location.hash = 'chat'; // redirect to chat page
    // but chat page not exist yet, so wait...
    setTimeout(() => {
      // now we can request update and rerender chat
      state.currentUser = sessionState.currentUser;
      state.chat = sessionState.chat;
    }, 0);
  }
}
