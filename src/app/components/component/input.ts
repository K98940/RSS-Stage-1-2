import './input.css';
import { Callback, HTMLAttributes } from '../../../types/types';
import { Component } from './component';

interface Props {
  classNames?: string[];
  attributes?: HTMLAttributes[];
  textContent?: string;
  callback?: Callback<unknown> | null;
}

type TypeNotice = 'inform' | 'warning' | 'error';

export class Input extends Component {
  notice;

  constructor(props: Props) {
    super({ tag: 'input', ...props });
    this.notice = new Component({ classNames: ['notice'] });
  }

  public showNotice(messages: string | string[], type: TypeNotice): void {
    this.notice.getNode().innerHTML = '';
    this.notice.setClasses([type]);
    let msg;
    if (typeof messages === 'string') {
      msg = `<p>${messages}</p>`;
    } else msg = messages.reduce((html, message) => `${html}<li>${message}</li>`, `<ul>`) + `</li>`;

    this.notice.getNode().innerHTML = msg;
    this.node.after(this.notice.getNode());
  }

  get isEmpty(): boolean {
    const countChars = this.value()?.length;
    return countChars === 0;
  }
}
