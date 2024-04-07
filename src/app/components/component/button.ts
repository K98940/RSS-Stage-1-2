import { Callback, HTMLAttributes } from '../../../types/types';
import { Component } from './component';

interface Props {
  classNames?: string[];
  attributes?: HTMLAttributes[];
  textContent?: string;
  callback?: Callback<unknown> | null;
}

export class Button extends Component {
  constructor(props: Props) {
    super({ tag: 'button', ...props });
  }
}
