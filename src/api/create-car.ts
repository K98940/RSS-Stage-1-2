import { CarProps } from './../components/car/car';
import { BASE_URL, Method } from './config';

const URL = '/garage';

export const create = {
  async car(car: CarProps): Promise<boolean> {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + URL, {
        method: Method.POST,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
      })
        .then((response) => {
          if (!response.ok) throw new Error();
          resolve(true);
        })
        .catch(() => reject(false));
    });
  },
};
