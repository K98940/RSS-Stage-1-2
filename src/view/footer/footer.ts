import './footer.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';
import { BtnCheck } from './btn-check/btn-check';

export default class Footer extends MyElement {
  constructor() {
    const prop: MyElementProps = {
      tag: 'footer',
      classNames: ['footer'],
    };
    super(prop);

    this.appendNodes(new BtnCheck());
  }
}
