import store, { subscribe } from '../../../store/store';
import { BaseComponent } from '../../base/base-component';
import { Car } from '../../car/car';
import './cars.css';

export class Cars extends BaseComponent {
  constructor() {
    super({ classNames: ['cars'] });
    subscribe('cars', this.renderListCars.bind(this));
    subscribe('currentID', this.renderSelectedCar.bind(this));
  }

  public renderListCars() {
    const cars = store.cars;
    if (cars instanceof Array) {
      this.node.innerHTML = '';
      cars.forEach((car) => {
        const newCar = new Car({
          color: car.color,
          id: car.id,
          name: car.name,
        });
        this.setSelectedClass(car.id, newCar);
        this.appendNodes(newCar);
      });
    }
  }

  public renderSelectedCar(): void {
    const cars = this.children;
    cars.forEach((car) => {
      if (!(car instanceof Car)) return;
      this.setSelectedClass(car.id, car);
    });
  }

  private setSelectedClass(id: number, car: Car) {
    const currentID = store.currentID;
    if (currentID === id) {
      car.setClasses(['car_selected']);
    } else car.removeClass('car_selected');
  }
}
