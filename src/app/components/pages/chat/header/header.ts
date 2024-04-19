import './header.css';
import state from '../../../../../state/state';
import { Button } from '../../../component/button';
import { Dispatch } from '../../../../../types/types';
import { Component } from '../../../component/component';

export class Header extends Component {
  constructor(dispatch: Dispatch) {
    super({ tag: 'header', classNames: ['header'] });

    const container = new Component({ classNames: ['header-right-side'] });
    container.appendNodes(
      new Component({ tag: 'span', textContent: state.appName, classNames: ['header__span'] }),
      new Button({
        textContent: 'Logout',
        classNames: ['header__btn'],
        callback: () => dispatch({ type: 'logout' }),
      }),
    );

    this.appendNodes(
      new Component({ tag: 'span', textContent: `User: ${state.user.login}`, classNames: ['header__span'] }),
      container,
    );
  }
}
