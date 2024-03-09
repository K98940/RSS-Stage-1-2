import './start.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';
import { State } from '../../components/app/State/state';
import { LocalStorage } from '../../LocalStorage/local-storage';

export default class Start extends MyElement {
  private state;

  localstorage;

  parent;

  constructor(parent: HTMLElement) {
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
    this.appendNodes(h1, p);
  }

  update(): void {
    const { firstName, surname, process } = this.state.getState();
    if (process === 'start') {
      this.parent.innerHTML = '';
      this.parent.append(this.getNode());
    } else {
    }
  }
}
