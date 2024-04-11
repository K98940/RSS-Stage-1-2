import { TCar } from '../types/types';
import { BASE_URL, Method } from './config';
import { responceToJSON } from '../utils/utils';

const URL = '/garage';

export const update = {
  car(id: number, car: TCar) {
    return fetch(BASE_URL + URL + `/${id}`, {
      method: Method.PUT,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    }).then(responceToJSON<Promise<boolean>>);
  },
};
