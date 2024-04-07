import { AuthUser } from '../../../../../api/auth-user';
import { AuthUsers } from '../../../../../api/auth-users';
import state from '../../../../../state/state';
import { Requests } from '../../../../../types/types-api';
import { isUsersResponse } from '../../../../../utils/predicates';
import { Component } from '../../../component/component';
import './users-list.css';

interface UserList {
  [index: string]: boolean;
}

export class Users extends Component {
  auth;

  authUsers;

  activeUsers: UserList;

  inactiveUsers: UserList;

  constructor() {
    super({ classNames: ['users'] });
    this.activeUsers = {};
    this.inactiveUsers = {};
    this.auth = new AuthUser();
    this.authUsers = new AuthUsers();
    this.authUsers.subscribe(Requests.USER_ACTIVE, this.obtainUsers);
    this.authUsers.subscribe(Requests.USER_INACTIVE, this.obtainUsers);
    this.auth.subscribe(Requests.USER_EXTERNAL_LOGIN, this.requestUsers);
    this.auth.subscribe(Requests.USER_EXTERNAL_LOGOUT, this.requestUsers);
  }

  public requestUsers = (): void => {
    this.authUsers.request();
  };

  public render(): void {
    const allUsers = [...Object.entries(this.activeUsers), ...Object.entries(this.inactiveUsers)];
    const users = allUsers.filter(([login]) => login !== state.user.login);
    const template =
      users.reduce((html, [login, status]) => `${html}<li ${status ? 'active' : ''}>${login}</li>`, '<ul>') + '</ul>';
    this.node.innerHTML = template;
  }

  private obtainUsers = (data: unknown) => {
    if (isUsersResponse(data)) {
      switch (data.type) {
        case Requests.USER_ACTIVE:
          this.activeUsers = {};
          data.payload.users.forEach((user) => (this.activeUsers[user.login] = user.isLogined));
          break;
        case Requests.USER_INACTIVE:
          this.inactiveUsers = {};
          data.payload.users.forEach((user) => (this.inactiveUsers[user.login] = user.isLogined));
          break;
      }
      this.render();
    }
  };
}
