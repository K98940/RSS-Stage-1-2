import './message-input.css';
import state, { subscribe } from '../../../../../state/state';
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
      callback: this.handleSubmit,
    });
    this.form.appendNodes(this.input, this.btnSend);
    this.form.getNode().addEventListener('submit', this.handleSubmit);
    this.appendNodes(this.form);
    subscribe('currentUser', () => this.handleUserSelect());
  }

  private handleInput(): void {
    const isEmpty = !this.input?.value()?.trim();
    if (isEmpty) {
      this.btnSend.active = false;
    } else {
      this.btnSend.active = true;
    }
  }

  private handleSubmit = (e?: Event | unknown): void => {
    if (e instanceof Event) e.preventDefault();
    const value = this.input.value()?.trim();
    if (value !== '') {
      state.currentInput = value || '';
      this.input.value('');
      this.btnSend.active = false;
      if (this.dispatch) this.dispatch({ type: 'message-read' });
    }
  };

  private handleUserSelect(): void {
    if (state.currentUser === '') {
      this.input.setClasses(['__inactive-element']);
    } else {
      this.input.removeClass('__inactive-element');
    }
  }
}
