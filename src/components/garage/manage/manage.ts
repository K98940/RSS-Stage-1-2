import { BaseComponent } from '../../base/base-component';
import { CreateCar } from './create-car/create-car';
import './manage.css';

export class Manage extends BaseComponent {
  constructor() {
    super({ classNames: ['manage'] });
    const createCar = new CreateCar();
    this.appendNodes(createCar);
  }
}
