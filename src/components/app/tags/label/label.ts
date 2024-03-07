import './label.css';
import { MyElement, MyElementProps } from '../../Element/my-element';

type LabelProps = {
  isRequire?: boolean;
  text: string;
  id?: string;
  classNames?: string[];
};

export default class Label extends MyElement {
  constructor(props: LabelProps) {
    const prop: MyElementProps = {
      tag: 'label',
      classNames: ['label', ...(props.classNames || [])],
      textContent: props.text,
    };
    super(prop);
    this.config(props);
  }

  config(props: LabelProps) {
    if (props.classNames) this.setClasses(['label__is-required']);
    if (props.id) this.setAttributes([['for', props.id]]);
  }
}
