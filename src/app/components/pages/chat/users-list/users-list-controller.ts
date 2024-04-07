import state from '../../../../../state/state';
import { AuthUser } from '../../../../../api/auth-user';
import { AuthUsers } from '../../../../../api/auth-users';
import { Requests } from '../../../../../types/types-api';
import { isUsersResponse } from '../../../../../utils/predicates';

interface UserList {
  [index: string]: boolean;
}

export class UsersController {
  authUsers;

  authUser;

  constructor() {
    this.authUser = new AuthUser();
    this.authUsers = new AuthUsers();

    this.authUsers.subscribe(Requests.USER_ACTIVE, (data) => this.obtainUsers(data));
    this.authUsers.subscribe(Requests.USER_INACTIVE, (data) => this.obtainUsers(data));
    this.authUser.subscribe(Requests.USER_EXTERNAL_LOGIN, () => this.requestUsers());
    this.authUser.subscribe(Requests.USER_EXTERNAL_LOGOUT, () => this.requestUsers());
  }

  public requestUsers(): void {
    this.authUsers.request();
  }

  private obtainUsers = (data: unknown) => {
    if (isUsersResponse(data)) {
      switch (data.type) {
        case Requests.USER_ACTIVE:
          const activeUsers: UserList = {};
          data.payload.users.forEach((user) => (activeUsers[user.login] = user.isLogined));
          state.activeUsers = activeUsers;
          break;
        case Requests.USER_INACTIVE:
          const inactiveUsers: UserList = {};
          data.payload.users.forEach((user) => (inactiveUsers[user.login] = user.isLogined));
          state.inactiveUsers = inactiveUsers;
          break;
      }
    }
  };
}
