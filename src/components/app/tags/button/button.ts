import './button.css';
import { MyElement, MyElementProps } from '../../Element/my-element';
import { Callback, HTMLAttributes } from '../../../../types/types';

type ButtonProps = {
  text: string;
  classNames?: string[];
  attributes?: HTMLAttributes[];
  callback?: Callback;
};

export default class Button extends MyElement {
  constructor(props: ButtonProps) {
    const prop: MyElementProps = {
      tag: 'button',
      classNames: ['button'],
      textContent: props.text,
      callback: props.callback,
    };
    super(prop);
    this.config(props);
  }

  config(props: ButtonProps) {
    if (props.attributes) this.setAttributes(props.attributes);
    if (props.classNames) this.setClasses(props.classNames);
  }
}
