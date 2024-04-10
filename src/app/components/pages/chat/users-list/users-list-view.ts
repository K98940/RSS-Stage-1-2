import './users-list.css';
import { UsersController } from './users-list-controller';
import { Component } from '../../../component/component';
import state, { subscribe } from '../../../../../state/state';
import { ListItem } from './list-item';
import { Callback } from '../../../../../types/types';

export class Users extends UsersController {
  container;

  callback;

  constructor(container: Component, callback: Callback<string>) {
    super();
    this.container = container;
    this.callback = callback;
    subscribe('activeUsers', () => this.render());
    subscribe('inactiveUsers', () => this.render());
    subscribe('currentUser', () => this.render());
  }

  public render(): void {
    const allUsers = [...Object.entries(state.activeUsers), ...Object.entries(state.inactiveUsers)];
    const users = allUsers.filter(([login]) => login !== state.user.login);
    this.container.getNode().innerHTML = '';
    users.forEach(([login, status]) => {
      this.container.appendNodes(new ListItem({ login: login, isLogined: status, callback: this.callback }));
    });
  }
}
