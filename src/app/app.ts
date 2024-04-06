/* eslint-disable @typescript-eslint/no-unused-vars */
import { Users } from '../api/auth-users';
import { Connect } from '../api/connect';
import { AuthUser } from '../api/auth-user';
import { AuthenticationRequest, AllAuthenticatedUsersRequest, Requests } from './../types/types-api';
import { PageLogin } from './components/pages/login/login';
import { PageChat } from './components/pages/chat/chat';
import { Component } from './components/component/component';
import state from '../state/state';
import { Color, l } from '../utils/utils';

const testAuthRequest: AuthenticationRequest = {
  id: '202404051704',
  type: Requests.USER_LOGIN,
  payload: {
    user: {
      login: 'test user',
      password: 'my password 12345',
    },
  },
};
const testUsersActive: AllAuthenticatedUsersRequest = {
  id: '',
  type: Requests.USER_ACTIVE,
  payload: null,
};
const testUsersInactive: AllAuthenticatedUsersRequest = {
  id: '',
  type: Requests.USER_INACTIVE,
  payload: null,
};

const connect = new Connect();
const auth = new AuthUser();
const users = new Users();
auth.request(testAuthRequest);
// users.request(testUsersActive);
// users.request(testUsersInactive);

export class App {
  pageLogin: PageLogin;

  pageChat: PageChat;

  node: Component;

  constructor() {
    this.pageLogin = new PageLogin();
    this.pageChat = new PageChat();
    this.node = new Component({});
    this.node.appendNodes(this.pageLogin.node);
    window.location.hash = state.currentPage;
    window.addEventListener('hashchange', () => this.router());
  }

  private router(): void {
    const hash = window.location.hash.slice(1);
    switch (hash) {
      case 'login':
        this.node.getNode().innerHTML = '';
        this.node.appendNodes(this.pageLogin.node);
        break;
      case 'chat':
        this.node.getNode().innerHTML = '';
        this.node.appendNodes(this.pageChat.node);
        break;
    }
  }
}
