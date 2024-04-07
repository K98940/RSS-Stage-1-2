/* eslint-disable @typescript-eslint/no-unused-vars */
import './app.css';
import { Users } from '../api/auth-users';
import { Connect } from '../api/connect';
import { AuthUser } from '../api/auth-user';
import { PageLogin } from './components/pages/login/login';
import { PageChat } from './components/pages/chat/chat';
import { Component } from './components/component/component';
import state, { subscribe } from '../state/state';
import { Color, l } from '../utils/utils';
import { Notifications } from '../api/notifications';

const connect = new Connect();
const auth = new AuthUser();
const users = new Users();

export class App {
  pageLogin: PageLogin;

  pageChat: PageChat;

  node: Component;

  notifications;

  constructor() {
    this.notifications = new Notifications();
    this.pageLogin = new PageLogin();
    this.pageChat = new PageChat();
    this.node = new Component({ classNames: ['app'] });
    this.pageLogin.render(this.node.getNode());

    window.addEventListener('hashchange', () => this.router());
    subscribe('currentPage', () => (window.location.hash = state.currentPage));
    window.location.hash = state.currentPage;
    document.title = state.pages[state.currentPage].title;
  }

  private router(): void {
    const hash = window.location.hash.slice(1);
    document.title = state.pages[state.currentPage].title;
    switch (hash) {
      case 'login':
        this.pageLogin.render(this.node.getNode());
        break;
      case 'chat':
        this.node.getNode().innerHTML = '';
        this.node.appendNodes(this.pageChat);
        break;
    }
  }
}
// TODO chat page - добавить список пользователей (on-line и off-line)
// TODO добавить сохранение и загрузку состояния в LS
