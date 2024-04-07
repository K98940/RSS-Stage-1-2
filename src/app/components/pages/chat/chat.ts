import { HTML } from '../../../../types/types';
import { Component } from '../../component/component';
import { Users } from './users-list/users-list';

export class PageChat extends Component {
  users;

  constructor() {
    super({});
    this.users = new Users();
    this.appendNodes(this.users);
  }

  public render(context: HTML): void {
    this.users.requestUsers();
    super.render(context);
  }
}
