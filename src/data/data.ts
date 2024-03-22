import { create } from '../api/create-car';
import { remove } from '../api/delete-car';
import { get } from '../api/get-car';
import { update } from '../api/update-car';
import { CarProps } from '../components/car/car';
import store from '../store/store';

export const data = {
  getCars(page: number, limit?: number) {
    return get.cars(page, limit);
  },

  createCar(car: CarProps) {
    create
      .car(car)
      .then(() => this.getCars(1))
      .then((cars) => {
        if (cars[0].error) {
          console.log(cars[0].error);
          return;
        }
        store.cars = cars;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  removeCar(id: number) {
    remove
      .car(id)
      .then(() => this.getCars(1))
      .then((cars) => {
        if (cars[0].error) {
          console.log(cars[0].error);
          return;
        }
        store.cars = cars;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  updateCar(id: number, car: CarProps) {
    update
      .car(id, car)
      .then(() => this.getCars(1))
      .then((cars) => {
        if (cars[0].error) {
          console.log(cars[0].error);
          return;
        }
        store.cars = cars;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
