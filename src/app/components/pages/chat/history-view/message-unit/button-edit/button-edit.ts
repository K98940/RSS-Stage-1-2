import { Dispatch } from '../../../../../../../types/types';
import { Component } from '../../../../../component/component';

export class ButtonEdit extends Component {
  private id: string;

  private text: string;

  constructor(id: string, text: string, dispatch: Dispatch) {
    super({
      tag: 'button',
      textContent: `edit`,
      classNames: ['footer_btn', 'btn__edit'],
      callback: () => dispatch({ type: 'message-edit', payload: { id: this.id, text: this.text } }),
    });
    this.id = id;
    this.text = text;
  }
}
