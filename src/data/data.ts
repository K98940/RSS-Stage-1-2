import { create } from '../api/create-car';
import { get } from '../api/get-car';
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
};
