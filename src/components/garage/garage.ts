import { BaseComponent } from '../base/base-component';
import './garage.css';

export class Garage extends BaseComponent {
  constructor() {
    super({ tag: 'section', classNames: ['garage'] });
  }
}
