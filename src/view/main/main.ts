import './main.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';
import Start from './start/start';
import { State } from '../../components/app/State/state';

export default class Main extends MyElement {
  state;

  constructor() {
    const prop: MyElementProps = {
      tag: 'main',
      classNames: ['main'],
    };

    super(prop);
    new Start(this.getNode());
    this.state = new State();
    this.state.subscribe(this);
    this.state.saveDOMElemt({ main: this.getNode() });
  }

  public updateValue() {
    const { process } = this.state.getState();
    switch (process) {
      case 'start':
        break;
      case 'login':
        this.getNode().innerHTML = '';
      default:
        break;
    }
  }
}
