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
import { GarageTitle } from './garage-titel/garage-titel';
import { Pagination } from './cars/pagination/pagination';
import { generateCarName, random } from '../../utils/utils';

export class Garage {
  node;

  cars;

  constructor() {
    this.cars = new Cars();
    this.node = new BaseComponent({ tag: 'section', classNames: ['garage'] });
    this.node.appendNodes(
      new Manage(this.startRace.bind(this), this.reset.bind(this), this.generate100cars.bind(this)),
      new GarageTitle(),
      this.cars,
      new Pagination(),
    );
    subscribe('carName', () => this.clickCreateCar());
    subscribe('page', () => this.clickPage());
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

  private clickPage(): void {
    this.getCars(store.page);
    this.cars.renderListCars();
  }

  protected generate100cars(): void {
    // TODO переделать на Promise.settledAll -> getCars
    for (let i = 0; i < 100; i += 1) {
      const r = random(0, 255).toString(16).padStart(2, '0');
      const g = random(0, 255).toString(16).padStart(2, '0');
      const b = random(0, 255).toString(16).padStart(2, '0');
      const { brand, name } = generateCarName();
      this.createCar({ id: 0, name: `${brand} ${name}`, color: `#${r}${g}${b}` });
    }
    this.getCars(store.page);
  }

  protected reset(): void {
    this.cars.resetAllCars();
  }

  protected startRace(): void {
    store.state = 'race';
    this.cars.startRace();
  }

  protected clickUpdateCar(e: CustomEvent) {
    const id = store.currentID;
    const name = e.detail.name;
    const color = store.carColor;
    if (!id || !name) return;
    this.updateCar(id, { id, name, color });
  }

  protected clickCreateCar() {
    this.createCar({ name: store.carName, color: store.carColor, id: 0 });
  }

  public carsToStore(response: TCar[]) {
    const newCars = response.map((car) => new Car(car));
    store.cars = [...newCars];
  }

  protected createCar(car: TCar) {
    create
      .car(car)
      .then(() => this.getCars(store.page))
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
        get.carsCount().then((carsTotal) => {
          if (carsTotal instanceof Array) {
            store.carsCount = carsTotal.length;
            store.carsTotal = carsTotal;
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  protected removeCar(id: number) {
    remove
      .car(id)
      .then(() => this.getCars(store.page))
      .catch((error) => {
        console.log(error);
      });
  }

  protected updateCar(id: number, car: TCar) {
    update
      .car(id, car)
      .then(() => this.getCars(store.page))
      .catch((error) => {
        console.log(error);
      });
  }
}
