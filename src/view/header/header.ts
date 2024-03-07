import './header.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';

export default class Header extends MyElement {
  constructor() {
    const prop: MyElementProps = {
      tag: 'header',
      classNames: ['header'],
    };
    super(prop);
  }
}
