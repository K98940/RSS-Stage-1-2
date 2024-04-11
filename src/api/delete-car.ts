import { responceToJSON } from '../utils/utils';
import { BASE_URL, Method } from './config';

const URL = '/garage';

export const remove = {
  car(id: number) {
    return fetch(BASE_URL + URL + `/${id}`, { method: Method.DELETE }).then(responceToJSON<Promise<boolean>>);
  },
};
