import { MyElement } from '../../../../components/app/Element/my-element';
import { State } from '../../../../components/app/State/state';
import './button-start.css';

export class ButtonStart extends MyElement {
  state;

  constructor() {
    super({
      tag: 'button',
      classNames: ['button-start'],
      textContent: 'START',
    });
    this.state = new State();
    this.setCallback(this.handleClick.bind(this));
  }

  private handleClick() {
    this.state.setState({
      ...this.state.getState(),
      process: 'game',
    });
  }
}
