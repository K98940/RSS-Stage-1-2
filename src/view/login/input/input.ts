import { InputProps } from './../../../types/types';
import './input.css';
import {
  MyElement,
  MyElementProps,
} from '../../../components/app/Element/my-element';

export default class Input extends MyElement {
  constructor(props: InputProps) {
    const prop: MyElementProps = {
      tag: 'input',
      classNames: ['form_input'],
      textContent: undefined,
      callback: props.callback,
    };
    super(prop);
    this.config(props);
  }

  config(props: InputProps) {
    if (props.attributes) {
      this.setAttributes(props.attributes);
    }
  }
}
