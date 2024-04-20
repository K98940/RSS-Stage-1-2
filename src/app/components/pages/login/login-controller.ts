import { AuthUser } from '../../../../api/auth-user';
import state, { subscribe } from '../../../../state/state';
import { Requests } from '../../../../types/types-api';
import { isAuthResponse } from '../../../../utils/predicates';

export class LoginController {
  private auth;

  constructor() {
    this.auth = new AuthUser();
    this.auth.subscribe(Requests.USER_LOGIN, (data) => this.responseAuthUser(data));
    subscribe('user', () => this.requestAuthUser());
  }

  public requestAuthUser(): void {
    if (state.user.login && state.user.password && !state.user.isRequested) {
      state.user.isRequested = true;
      const { login, password } = state.user;
      this.auth.login({ login, password });
    }
  }

  private responseAuthUser(data: unknown): void {
    if (isAuthResponse(data)) {
      const { login, isLogined } = data.payload.user;
      if (isLogined && login === state.user.login) {
        state.currentPage = 'chat';
        state.user = { ...state.user, isLogined };
      }
    }
  }
}
