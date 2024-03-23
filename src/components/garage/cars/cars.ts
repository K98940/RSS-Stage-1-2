import { Car } from '../../car/car';
import store, { subscribe } from '../../../store/store';
import { BaseComponent } from '../../base/base-component';

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
        this.setSelectedClass(car.id, car);
        this.appendNodes(car.node);
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
      car.node.setClasses(['car_selected']);
    } else car.node.removeClass('car_selected');
  }

  public startRace(): void {
    store.cars.forEach((car) => {
      car.startMove();
    });
  }

  public resetAllCars(): void {
    store.cars.forEach((car) => {
      car.stopEngine();
    });
  }
}
