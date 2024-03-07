import './footer.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';

export default class Footer extends MyElement {
  constructor() {
    const prop: MyElementProps = {
      tag: 'footer',
      classNames: ['footer'],
    };
    super(prop);
  }
}
