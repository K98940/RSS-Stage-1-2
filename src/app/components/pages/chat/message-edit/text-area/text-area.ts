import { Callback } from '../../../../../../types/types';
import { Component } from '../../../../component/component';

export class TextInput extends Component {
  text: string;

  callback: Callback<Event>;

  constructor(callback: Callback<Event>, text: string = '') {
    super({
      tag: 'input',
      classNames: ['form__input'],
      attributes: [
        ['placeholder', 'message...'],
        ['value', text],
      ],
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
