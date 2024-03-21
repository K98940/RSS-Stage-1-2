import './input.css';
import { BaseComponent } from '../base-component';

export class Input extends BaseComponent {
  constructor(className: string[]) {
    super({ tag: 'input', classNames: ['input'] });
    this.setClasses(className);
  }
}
