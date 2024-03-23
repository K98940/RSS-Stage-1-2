import { TCar } from '../types/types';
import { BASE_URL, Method } from './config';

const URL = '/garage';

export const update = {
  async car(id: number, car: TCar): Promise<boolean> {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + URL + `/${id}`, {
        method: Method.PUT,
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
