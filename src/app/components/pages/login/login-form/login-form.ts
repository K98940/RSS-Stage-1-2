import state, { subscribe } from '../../../../../state/state';
import { Validation } from '../../../../../types/types';
import {
  compose,
  isNotEmpty,
  isNotEmptyAfterTrim,
  isToLong20,
  isToShort3,
} from '../../../../../utils/validation-rules';
import { Button } from '../../../component/button';
import { Component } from '../../../component/component';
import { Input } from '../../../component/input';

type Inputs = {
  login: string;
  password: string;
};

export class LoginForm extends Component {
  iLogin;

  iPass;

  btn;

  constructor() {
    super({ tag: 'form', classNames: ['login-page__form', 'login-page_flex'] });
    this.iLogin = new Input({ attributes: [['name', 'login']] });
    this.iPass = new Input({ attributes: [['name', 'password']] });
    this.btn = new Button({ textContent: 'Login' });
    const btnAbout = new Button({
      textContent: 'About',
      classNames: [''],
    });
    btnAbout.setCallback((e) => {
      e?.preventDefault();
      window.location.hash = 'about';
    }, 'click');
    this.btn.setCallback((e) => this.handleClick(e), 'click');
    this.appendNodes(this.iLogin, this.iPass, this.btn, btnAbout);
    subscribe('user', () => {
      if (state.user.isLogined) this.resetInputs();
    });
  }

  private handleClick(e: Event | undefined) {
    if (e instanceof Event) {
      e.preventDefault();
      const { login, password } = this.getInputs();
      const validLogin = this.validateInput(login);
      const validPassword = this.validateInput(password);
      this.iLogin.showNotice(validLogin.errors, 'error');
      this.iPass.showNotice(validPassword.errors, 'error');
      if (!validLogin.validate || !validPassword.validate) return;
      this.userAuthorise(login, password);
    }
  }

  private userAuthorise(login: string, password: string): void {
    state.user = { login, password, isLogined: false, isRequested: false };
  }

  private getInputs(): Inputs {
    return {
      login: this.iLogin.value() || '',
      password: this.iPass.value() || '',
    };
  }

  public resetInputs(): void {
    this.iLogin.value('');
    this.iPass.value('');
  }

  private validateInput(input: string): Validation {
    return compose(
      isNotEmpty,
      isNotEmptyAfterTrim,
      isToShort3,
      isToLong20,
    )({ subject: input, validate: true, errors: [] });
  }
}
