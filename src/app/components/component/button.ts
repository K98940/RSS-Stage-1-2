import { Callback, HTMLAttributes } from '../../../types/types';
import { Component } from './component';

interface Props {
  classNames?: string[];
  attributes?: HTMLAttributes[];
  textContent?: string;
  callback?: Callback<unknown> | null;
}

export class Button extends Component {
  private _active = true;

  constructor(props: Props) {
    super({ tag: 'button', ...props });
  }

  set active(active: boolean) {
    this._active = active;
    if (active) {
      this.removeClass('__inactive-element');
    } else {
      this.setClasses(['__inactive-element']);
    }
  }

  get active(): boolean {
    return this._active;
  }
}
