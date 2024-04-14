import './users-list.css';
import { UsersController } from './users-list-controller';
import { Component } from '../../../component/component';
import state, { subscribe } from '../../../../../state/state';
import { ListItem } from './list-item';
import { Dispatch } from '../../../../../types/types';

export class Users extends UsersController {
  container;

  dispatch;

  constructor(container: Component, dispatch: Dispatch) {
    super();
    this.container = container;
    this.dispatch = dispatch;
    subscribe('activeUsers', () => this.render());
    subscribe('inactiveUsers', () => this.render());
    subscribe('currentUser', () => this.render());
  }

  public render(): void {
    const allUsers = [...Object.entries(state.activeUsers), ...Object.entries(state.inactiveUsers)];
    const users = allUsers.filter(([login]) => login !== state.user.login);
    this.container.getNode().innerHTML = '';
    users.forEach(([login, status]) => {
      this.container.appendNodes(new ListItem({ login: login, isLogined: status, dispatch: this.dispatch }));
    });
  }
}
