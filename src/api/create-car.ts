import { TCar } from '../types/types';
import { BASE_URL, Method } from './config';
import { responceToJSON } from '../utils/utils';

const URL = '/garage';

export const create = {
  car(car: TCar): Promise<TCar | Error> {
    return fetch(BASE_URL + URL, {
      method: Method.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    }).then(responceToJSON<Promise<TCar | Error>>);
  },
};
