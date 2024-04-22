import './header.css';
import state, { subscribe } from '../../../../../state/state';
import { Button } from '../../../component/button';
import { Dispatch } from '../../../../../types/types';
import { Component } from '../../../component/component';

export class Header extends Component {
  spanUserLogin;

  userLoginPrev;

  constructor(dispatch: Dispatch) {
    super({ tag: 'header', classNames: ['header'] });

    this.userLoginPrev = state.user.login;
    const container = new Component({ classNames: ['header-right-side'] });
    container.appendNodes(
      new Component({ tag: 'span', textContent: state.appName, classNames: ['header__span'] }),
      new Button({
        textContent: 'About',
        classNames: ['header__btn'],
        callback: () => dispatch({ type: 'about' }),
      }),
      new Button({
        textContent: 'Logout',
        classNames: ['header__btn'],
        callback: () => dispatch({ type: 'logout' }),
      }),
    );

    this.spanUserLogin = new Component({
      tag: 'span',
      textContent: `user: ${state.user.login}`,
      classNames: ['header__span'],
    });
    this.appendNodes(this.spanUserLogin, container);
    subscribe('user', this.handleUserLoginChange);
  }

  handleUserLoginChange = (): void => {
    if (this.userLoginPrev === state.user.login || !state.user.login) return;
    this.userLoginPrev = state.user.login;
    this.spanUserLogin.setTextContent(`user: ${state.user.login}`);
  };
}
