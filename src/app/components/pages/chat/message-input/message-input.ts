import './message-input.css';
import state from '../../../../../state/state';
import { Component } from '../../../component/component';

export class InputMessage extends Component {
  form;

  input;

  btnSend;

  constructor() {
    super({ classNames: ['message-input-container'] });
    this.form = new Component({ tag: 'form' });
    this.input = new Component({ tag: 'input', attributes: [['placeholder', 'enter message']] });
    this.btnSend = new Component({
      tag: 'button',
      textContent: 'SEND',
      callback: () => {
        const value = this.input.value();
        if (typeof value === 'string') {
          state.currentInput = value;
          this.input.value('');
        }
      },
    });
    this.form.appendNodes(this.input, this.btnSend);
    this.appendNodes(this.form);
  }
}
