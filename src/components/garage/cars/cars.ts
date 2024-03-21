import store, { subscribe } from '../../../store/store';
import { BaseComponent } from '../../base/base-component';
import { Car } from '../../car/car';
import './cars.css';

export class Cars extends BaseComponent {
  constructor() {
    super({ classNames: ['cars'] });
    subscribe('cars', this.render.bind(this));
  }

  public render() {
    const cars = store.cars;
    if (cars instanceof Array) {
      this.node.innerHTML = '';
      cars.forEach((car) => {
        this.appendNodes(
          new Car({ color: car.color, id: car.id, name: car.name }),
        );
      });
    }
  }
}
