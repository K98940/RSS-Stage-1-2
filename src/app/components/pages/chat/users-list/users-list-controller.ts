import { CB, ChatMessage } from '../../../../../types/types';
import { Messages } from '../../../../../api/messages';
import { AuthUser } from '../../../../../api/auth-user';
import { AuthUsers } from '../../../../../api/auth-users';
import state, { subscribe } from '../../../../../state/state';
import { isUsersResponse } from '../../../../../utils/predicates';
import { Requests, UserResponse } from '../../../../../types/types-api';

type UserList = {
  [index: string]: boolean;
};
type Props = {
  login: string;
  isLogined: boolean;
  countNewMessages: number;
};

type LocalState = {
  currentUser: string;
  users: Props[];
};
type Subscriber = CB<Props[]>;
let subscriberGetUsers: Subscriber;

const filterRemoveMe = ({ login }: UserResponse) => login !== state.user.login;
const filterUsers = ([login]: [string, boolean]) =>
  login.toLocaleLowerCase().includes(state.filter.toLocaleLowerCase());
const filterUnreadMessages = (message: ChatMessage) => {
  return message.to === state.user.login && message.status.isReaded === false;
};
const ConvertToStateFormat = (acc: UserList, user: UserResponse): UserList => ({
  ...acc,
  [user.login]: user.isLogined,
});

export class UsersController {
  private authUsers;

  private authUser;

  private messages;

  private localState: LocalState | null;

  constructor() {
    this.localState = null;
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
    subscribe('filter', () => this.handleUpdate());
  }

  public requestUsers(): void {
    this.authUsers.request();
  }

  private responseUsers = (data: unknown) => {
    if (isUsersResponse(data)) {
      switch (data.type) {
        case Requests.USER_ACTIVE:
          state.activeUsers = this.setUsersToState(data.payload.users);
          break;
        case Requests.USER_INACTIVE:
          state.inactiveUsers = this.setUsersToState(data.payload.users);
          break;
      }
    }
  };

  private setUsersToState(users: UserResponse[]) {
    const filteredUsers = users.filter(filterRemoveMe);
    filteredUsers.forEach((user) => this.responseMessages(user.login));
    return filteredUsers.reduce(ConvertToStateFormat, {});
  }

  public getUsers = (calback: CB<Props[]>) => {
    subscriberGetUsers = calback;
  };

  private handleUpdate(): void {
    const allUsers = [...Object.entries(state.activeUsers), ...Object.entries(state.inactiveUsers)];
    let filteredUsers = allUsers.filter(([login]) => login !== state.user.login);

    if (state.filter !== '') {
      filteredUsers = allUsers.filter(filterUsers);
    }
    const renderUsers = filteredUsers.map(([login, isLogined]) => {
      const countNewMessages = state.chat[login]?.filter(filterUnreadMessages).length || 0;
      return { login, isLogined, countNewMessages };
    });
    if (this.isStateChanged(renderUsers)) subscriberGetUsers(renderUsers);
  }

  private isStateChanged(renderUsers: Props[]): boolean {
    const oldState = JSON.stringify(this.localState);
    const newState = JSON.stringify(renderUsers);
    if (oldState !== newState && this.localState) {
      this.localState.currentUser = state.currentUser;
      this.localState.users = renderUsers;
    }
    return oldState !== newState;
  }

  private responseMessages(user: string): void {
    this.messages.request(user);
  }
}
