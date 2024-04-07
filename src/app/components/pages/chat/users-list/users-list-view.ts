import './users-list.css';
import { UsersController } from './users-list-controller';
import { Component } from '../../../component/component';
import state, { subscribe } from '../../../../../state/state';

export class Users extends UsersController {
  container;

  constructor(container: Component) {
    super();
    this.container = container;
    subscribe('activeUsers', () => this.render());
    subscribe('inactiveUsers', () => this.render());
  }

  public render(): void {
    const allUsers = [...Object.entries(state.activeUsers), ...Object.entries(state.inactiveUsers)];
    const users = allUsers.filter(([login]) => login !== state.user.login);
    const template =
      users.reduce((html, [login, status]) => `${html}<li ${status ? 'active' : ''}>${login}</li>`, '<ul>') + '</ul>';
    this.container.getNode().innerHTML = template;
  }
}
