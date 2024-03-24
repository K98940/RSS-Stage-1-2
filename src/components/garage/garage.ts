import './garage.css';
import { Car } from '../car/car';
import { Cars } from './cars/cars';
import { get } from '../../api/get-car';
import { TCar } from '../../types/types';
import { Manage } from './manage/manage';
import { create } from '../../api/create-car';
import { remove } from './../../api/delete-car';
import { update } from './../../api/update-car';
import store, { subscribe } from '../../store/store';
import { BaseComponent } from '../base/base-component';

export class Garage {
  node;

  cars;

  constructor() {
    this.cars = new Cars();
    this.node = new BaseComponent({ tag: 'section', classNames: ['garage'] });
    this.node.appendNodes(
      new Manage(this.startRace.bind(this), this.reset.bind(this), this.generate100cars.bind(this)),
      this.cars,
    );
    subscribe('carName', () => this.clickCreateCar());
    document.addEventListener('clickUpdate', (e) => {
      if (e instanceof CustomEvent) {
        this.clickUpdateCar(e);
      }
    });
    document.addEventListener('removeCar', (e) => {
      if (e instanceof CustomEvent) {
        this.removeCar(e.detail.id);
      }
    });
  }

  protected generate100cars(): void {
    // l('100 cars', Color.blue);
    // for (let i = 0; i < 50; i += 1) {
    //   this.createCar({ id: 0, name: `car-${i}`, color: 'green' });
    // }
    // this.getCars(1);
  }

  protected reset(): void {
    this.cars.resetAllCars();
  }

  protected startRace(): void {
    this.cars.startRace();
  }

  protected clickUpdateCar(e: CustomEvent) {
    const id = store.currentID;
    const name = e.detail.name;
    if (!id || !name) return;
    const color = store.cars.filter((car) => car.id === id)[0].color;
    this.updateCar(id, { id, name, color });
  }

  protected clickCreateCar() {
    this.createCar({ name: store.carName, color: 'green', id: 0 });
  }

  public carsToStore(response: TCar[]) {
    const newCars = response.map((car) => new Car(car));
    store.cars = [...newCars];
  }

  protected createCar(car: TCar) {
    create
      .car(car)
      .then(() => this.getCars(1))
      .catch((error) => {
        console.log(error);
      });
  }

  public getCars(page: number, limit?: number) {
    get
      .cars(page, limit)
      .then((cars) => {
        if (!cars) return;
        this.carsToStore(cars);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  protected removeCar(id: number) {
    remove
      .car(id)
      .then(() => this.getCars(1))
      .catch((error) => {
        console.log(error);
      });
  }

  protected updateCar(id: number, car: TCar) {
    update
      .car(id, car)
      .then(() => this.getCars(1))
      .catch((error) => {
        console.log(error);
      });
  }
}
