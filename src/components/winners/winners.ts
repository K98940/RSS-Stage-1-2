import { BaseComponent } from '../base/base-component';
import './winners.css';

export class Winners extends BaseComponent {
  constructor() {
    super({ tag: 'section', classNames: ['winners'] });
  }
}
