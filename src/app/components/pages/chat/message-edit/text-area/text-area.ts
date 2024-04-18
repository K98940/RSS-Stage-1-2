import { Callback } from '../../../../../../types/types';
import { Component } from '../../../../component/component';

export class TextArea extends Component {
  text: string;

  callback: Callback<Event>;

  constructor(callback: Callback<Event>, text: string = '') {
    super({
      tag: 'textarea',
      textContent: text,
      classNames: ['form__textarea'],
      attributes: [['placeholder', 'message...']],
    });
    this.text = text;
    this.callback = callback;

    this.setCallback((e) => this.callback(e), 'keyup');
  }

  get isEmpty(): boolean {
    const countChars = this.value()?.length;
    return countChars === 0;
  }
}
