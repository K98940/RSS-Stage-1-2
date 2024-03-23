import { TCar } from '../types/types';
import { BASE_URL, Method } from './config';

const URL = '/garage';

export const create = {
  async car(car: TCar): Promise<TCar | Error> {
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
          return response.json();
        })
        .then((response: Promise<TCar>) => resolve(response))
        .catch((e: Error) => reject(e));
    });
  },
};
