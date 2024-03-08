import { State } from './../../components/app/State/state';
import { LocalStorage } from './../../LocalStorage/local-storage';
import './header.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';
import Button from '../../components/app/tags/button/button';
import { Dialog } from '../dialog/dialog';
import { StateObect } from '../../types/types';

const initialState: StateObect = {
  firstName: null,
  surname: null,
};

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

  public update(): void {
    const state = this.state.getState();
    if (state) {
      if (state.firstName && state.surname) {
        this.getNode().innerHTML = '';
        const btnLogout = new Button({
          text: 'Logout',
          classNames: ['header__btn-logout'],
          callback: this.logOut.bind(this),
        });

        const welcomeContainer = new MyElement({ classNames: ['welcome'] });
        welcomeContainer.appendNodes(
          new MyElement({ tag: 'p', textContent: 'welcome' }),
          new MyElement({ tag: 'p', textContent: state.firstName }),
          new MyElement({ tag: 'p', textContent: state.surname }),
        );
        this.appendNodes(welcomeContainer, btnLogout);
      } else {
        this.getNode().innerHTML = '';
      }
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
        });
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
