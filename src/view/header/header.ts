import './header.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';
import { State } from '../../components/app/State/state';

export default class Header extends MyElement {
  private state: State;

  constructor() {
    const prop: MyElementProps = {
      tag: 'header',
      classNames: ['header'],
    };
    super(prop);
    this.state = new State();
    this.state.subscribe(this);
  }

  public update(): void {
    const state = this.state.getState();
    if (state) {
      if (state.userFirstName && state.surname) {
        this.appendNodes(
          new MyElement({ tag: 'p', textContent: 'welcome' }),
          new MyElement({ tag: 'p', textContent: state.userFirstName }),
          new MyElement({ tag: 'p', textContent: state.surname }),
        );
      }
    }
  }
}
