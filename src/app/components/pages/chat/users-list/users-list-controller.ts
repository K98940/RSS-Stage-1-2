import state, { subscribe } from '../../../../../state/state';
import { AuthUser } from '../../../../../api/auth-user';
import { AuthUsers } from '../../../../../api/auth-users';
import { Requests } from '../../../../../types/types-api';
import { isUsersResponse } from '../../../../../utils/predicates';
import { CB } from '../../../../../types/types';
import { Messages } from '../../../../../api/messages';

interface UserList {
  [index: string]: boolean;
}

type Subscriber = CB<Props[]>;
let subscriber: Subscriber;

type Props = {
  login: string;
  isLogined: boolean;
  countNewMessages: number;
};

export class UsersController {
  authUsers;

  authUser;

  messages;

  constructor() {
    this.authUser = new AuthUser();
    this.authUsers = new AuthUsers();
    this.messages = new Messages();

    this.authUsers.subscribe(Requests.USER_ACTIVE, (data) => this.responseUsers(data));
    this.authUsers.subscribe(Requests.USER_INACTIVE, (data) => this.responseUsers(data));
    this.authUser.subscribe(Requests.USER_EXTERNAL_LOGIN, () => this.requestUsers());
    this.authUser.subscribe(Requests.USER_EXTERNAL_LOGOUT, () => this.requestUsers());
    subscribe('chat', () => this.handleUpdate());
    subscribe('activeUsers', () => this.handleUpdate());
    subscribe('inactiveUsers', () => this.handleUpdate());
    subscribe('currentUser', () => this.handleUpdate());
  }

  public requestUsers(): void {
    this.authUsers.request();
  }

  private responseUsers = (data: unknown) => {
    if (isUsersResponse(data)) {
      switch (data.type) {
        case Requests.USER_ACTIVE:
          const activeUsers: UserList = {};
          data.payload.users.forEach((user) => (activeUsers[user.login] = user.isLogined));
          state.activeUsers = activeUsers;

          const usersActive = [...Object.entries(state.activeUsers)];
          const filteredUsersA = usersActive.filter(([login]) => login !== state.user.login);
          filteredUsersA.forEach(([user]) => {
            this.responseMessages(user);
          });
          break;
        case Requests.USER_INACTIVE:
          const inactiveUsers: UserList = {};
          data.payload.users.forEach((user) => (inactiveUsers[user.login] = user.isLogined));
          state.inactiveUsers = inactiveUsers;

          const usersInactive = [...Object.entries(state.inactiveUsers)];
          const filteredUsersI = usersInactive.filter(([login]) => login !== state.user.login);
          filteredUsersI.forEach(([user]) => this.responseMessages(user));
          break;
      }
    }
  };

  public subscribe = (calback: CB<Props[]>) => {
    subscriber = calback;
  };

  handleUpdate(): void {
    const allUsers = [...Object.entries(state.activeUsers), ...Object.entries(state.inactiveUsers)];
    const filteredUsers = allUsers.filter(([login]) => login !== state.user.login);
    const renderUsers = filteredUsers.map(([login, isLogined]) => {
      const countNewMessages =
        state.chat[login]?.filter((message) => message.to === state.user.login && message.status.isReaded === false)
          .length || 0;
      return { login, isLogined, countNewMessages };
    });

    subscriber(renderUsers);
  }

  responseMessages(user: string): void {
    this.messages.request(user);
  }
}
// TODO добавить предыдущее состояние и их сравнение для оптимизации рендера
