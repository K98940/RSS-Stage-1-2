import { BaseComponent } from '../base/base-component';
import { Manage } from './manage/manage';
import './garage.css';
import { Cars } from './cars/cars';

export class Garage extends BaseComponent {
  constructor() {
    super({ tag: 'section', classNames: ['garage'] });
    this.appendNodes(new Manage(), new Cars());
  }
}
