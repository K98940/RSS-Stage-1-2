import './start.css';
import {
  MyElement,
  MyElementProps,
} from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';
import { LocalStorage } from '../../../LocalStorage/local-storage';
import { ButtonStart } from './button-start/button-start';
import { Html } from '../../../types/types';

export default class Start extends MyElement {
  private state;

  localstorage;

  parent;

  constructor(parent: Html) {
    const prop: MyElementProps = {
      tag: 'article',
      classNames: ['start'],
    };
    super(prop);
    this.state = new State();
    this.state.subscribe(this);
    this.localstorage = new LocalStorage();
    this.parent = parent;
    this.config();
  }

  config() {
    const h1 = new MyElement({
      tag: 'h1',
      textContent: 'english puzzle',
      classNames: ['start__title'],
    });
    const p = new MyElement({
      tag: 'p',
      textContent:
        'English puzzle is an interactive mini-game aimed at enhancing English language skills',
      classNames: ['start__content'],
    });
    const btnStart = new ButtonStart();
    this.appendNodes(h1, p, btnStart);
  }

  update(): void {
    const { process } = this.state.getState();
    console.log(process);
    switch (process) {
      case 'start':
        this.parent.innerHTML = '';
        this.parent.append(this.getNode());
        break;
      case 'game':
        console.log(this.parent);
        this.parent.innerHTML = '';
        const temp = new MyElement({
          tag: 'h1',
          classNames: ['game__temp'],
          textContent: 'Main Game Page',
        });
        this.parent.append(temp.getNode());
        break;
      default:
        break;
    }
  }
}
