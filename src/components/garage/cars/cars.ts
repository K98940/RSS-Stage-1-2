import { Car } from '../../car/car';
import { Color, l } from '../../../utils/utils';
import store, { subscribe } from '../../../store/store';
import { BaseComponent } from '../../base/base-component';
import { RaceResult } from '../../../types/types';
import { RegistrationResults } from '../../winners/registration';

export class Cars extends BaseComponent {
  registration = new RegistrationResults();

  constructor() {
    super({ classNames: ['cars'] });
    subscribe('cars', this.renderListCars.bind(this));
    subscribe('currentID', this.renderSelectedCar.bind(this));
  }

  public renderListCars(): void {
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
    const carPromises: Promise<RaceResult | Error>[] = [];
    store.cars.forEach((car) => {
      carPromises.push(car.startMove());
    });

    Promise.allSettled(carPromises)
      .then(() => {
        l('The RACE Over', Color.green);
        store.state = 'idle';
      })
      .catch((e) => {
        l('The RACE ERROR ' + e, Color.orange);
      });
    Promise.any(carPromises)
      .then((result) => {
        if (!(result instanceof Error)) {
          // TODO показать всплывашку о победителе
          l('FIRST PLACE IS THE ' + result.car.name + ' ' + result.time + ' seconds!', Color.green);
          this.registration.saveResultRace(result.car, result.time);
        }
      })
      .catch(() => {});
  }

  public resetAllCars(): void {
    store.cars.forEach((car) => {
      car.stopEngine();
    });
  }
}
