import './login.css';
import state, { subscribe } from '../../../../state/state';
import { HTML } from '../../../../types/types';
import { LoginForm } from './login-form/login-form';
import { Component } from '../../component/component';
import { Color, l } from '../../../../utils/utils';
import { AuthUser } from '../../../../api/auth-user';
import { Requests } from '../../../../types/types-api';
import { isAuthResponse } from '../../../../utils/predicates';

export class PageLogin extends Component {
  form;

  auth;

  constructor() {
    super({ tag: 'article', classNames: ['login-page', 'login-page_flex'] });
    this.auth = new AuthUser();
    this.auth.subscribe(Requests.USER_LOGIN, (data) => this.responseAuthUser(data));
    this.form = new LoginForm();
    this.form.render(this.node);
    subscribe('user', () => this.requestAuthUser());
  }

  public render(context: HTML): void {
    super.render(context);
  }

  private requestAuthUser(): void {
    if (state.user.login && state.user.password) {
      const { login, password } = state.user;
      this.auth.request({ login, password });
    }
  }

  public responseAuthUser(data: unknown): void {
    l('получен ответ', data, Color.green);

    if (isAuthResponse(data)) {
      const { login, isLogined } = data.payload.user;
      if (isLogined && login === state.user.login) {
        this.form.resetInputs();
        state.currentPage = 'chat';
      }
    }
  }
}
