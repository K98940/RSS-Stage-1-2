import { Dispatch } from '../../../../../../../types/types';
import { Component } from '../../../../../component/component';

export class ButtonEdit extends Component {
  private id: string;

  private text: string;

  constructor(id: string, text: string, dispatch: Dispatch) {
    super({
      tag: 'button',
      textContent: `edit`,
      classNames: ['footer_btn'],
      callback: () => dispatch({ type: 'message-edit', payload: { id: this.id, text: this.text } }),
    });
    this.id = id;
    this.text = text;
  }
}
