import './footer.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';
import { BtnCheck } from './btn-check/btn-check';
import { BtnAutoComplete } from './btn-auto-complete/btn-auto-complete';

export default class Footer extends MyElement {
  constructor() {
    const prop: MyElementProps = {
      tag: 'footer',
      classNames: ['footer'],
    };
    super(prop);

    this.appendNodes(new BtnCheck(), new BtnAutoComplete());
  }
}
