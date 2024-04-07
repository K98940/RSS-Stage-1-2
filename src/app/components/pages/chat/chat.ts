import { HTML } from '../../../../types/types';
import { Component } from '../../component/component';
import { Users } from './users-list/users-list-view';

export class PageChat extends Component {
  users;

  constructor() {
    super({});
    const usersContainer = new Component({ classNames: ['users'] });
    this.appendNodes(usersContainer);
    this.users = new Users(usersContainer);
  }

  public render(context: HTML): void {
    this.users.requestUsers();
    super.render(context);
  }
}
