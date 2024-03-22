import { BaseComponent } from '../../base/base-component';
import { CreateCar } from './create-car/create-car';
import './manage.css';
import { UpdateCar } from './update-car/update-car';

export class Manage extends BaseComponent {
  constructor() {
    super({ classNames: ['manage'] });
    const createCar = new CreateCar();
    const updateCar = new UpdateCar();
    this.appendNodes(createCar, updateCar);
  }
}
