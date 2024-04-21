import './message-input.css';
import state from '../../../../../state/state';
import { Input } from '../../../component/input';
import { Button } from '../../../component/button';
import { Component } from '../../../component/component';
import { Dispatch } from '../../../../../types/types';

export class InputMessage extends Component {
  form;

  input;

  btnSend;

  constructor(dispatch: Dispatch) {
    super({ classNames: ['message-input-container'] });
    this.dispatch = dispatch;
    this.form = new Component({ tag: 'form' });
    this.input = new Input({ attributes: [['placeholder', 'message...']] });
    this.input.setCallback(() => this.handleInput(), 'keyup');
    const styleInactiveBtn = this.input.isEmpty ? '__inactive-element' : '';
    this.btnSend = new Button({
      textContent: 'SEND',
      classNames: [styleInactiveBtn],
      callback: () => {
        const value = this.input.value();
        if (typeof value === 'string') {
          state.currentInput = value;
          this.input.value('');
          this.btnSend.active = false;
          if (this.dispatch) this.dispatch({ type: 'message-read' });
        }
      },
    });
    this.form.appendNodes(this.input, this.btnSend);
    this.appendNodes(this.form);
  }

  private handleInput(): void {
    if (this.input.isEmpty) {
      this.btnSend.active = false;
    } else {
      this.btnSend.active = true;
    }
  }
}
