import { State, initialState } from './../../components/app/State/state';
import { LocalStorage } from './../../LocalStorage/local-storage';
import './header.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';
import Button from '../../components/app/tags/button/button';
import { Dialog } from '../dialog/dialog';
import { Welcome } from './welcome/welcome';
import { Selectors } from './Selectors/selectors';

export default class Header extends MyElement {
  private state;

  private localstorage;

  constructor() {
    const prop: MyElementProps = {
      tag: 'header',
      classNames: ['header'],
    };
    super(prop);
    this.state = new State();
    this.localstorage = new LocalStorage();
    this.state.subscribe(this);
  }

  public updateValue(): void {
    const { process } = this.state.getState();
    switch (process) {
      case 'start':
        this.getNode().innerHTML = '';
        const btnLogout = new Button({
          text: 'Logout',
          classNames: ['header__btn-logout'],
          callback: this.logOut.bind(this),
        });
        const welcome = new Welcome();
        this.appendNodes(welcome, btnLogout);
        break;
      case 'login':
        this.getNode().innerHTML = '';
        break;
      case 'game':
        const selectors = new Selectors();
        this.getNode().prepend(selectors.getNode());
        break;
      default:
        break;
    }
  }

  private logOut() {
    const dialog = new Dialog('Really logout?');
    const dialogElement = dialog.getNode();
    const btnYes = new Button({
      text: 'YES',
      callback: () => {
        this.localstorage.clear();
        this.state.setState({
          ...this.state.getState(),
          ...initialState,
          process: 'login',
        });
        this.localstorage.save(this.state.getState());
        dialogElement.remove();
      },
    });
    const btnNo = new Button({
      text: 'NO',
      callback: () => {
        dialogElement.remove();
      },
    });
    dialog.appendNodes(btnYes, btnNo);
    this.appendNodes(dialog.getNode());

    if (dialogElement instanceof HTMLDialogElement) {
      dialogElement.showModal();
    }
  }
}
