import './main.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';

export default class Main extends MyElement {
  constructor() {
    const prop: MyElementProps = {
      tag: 'main',
      classNames: ['main'],
    };
    super(prop);
  }
}
