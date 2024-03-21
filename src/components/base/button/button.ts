import { HTMLAttributes, Callback } from '../../../types/types';
import { BaseComponent } from '../base-component';
import './button.css';

type ButtonProps = {
  classNames?: string[];
  attributes?: HTMLAttributes[];
  textContent?: string;
  callback?: Callback;
};

export class Button extends BaseComponent {
  constructor(props: ButtonProps) {
    super({
      tag: 'button',
      classNames: props.classNames,
      attributes: props.attributes,
      textContent: props.textContent,
      callback: props.callback,
    });
    this.setClasses(['button']);
  }
}
