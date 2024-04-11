import { responceToJSON } from '../utils/utils';
import { BASE_URL, Method } from './config';

const URL = '/engine';
type Controllers = {
  [index: string]: AbortController;
};
const controllers: Controllers = {};

export const drive = {
  go(id: number) {
    controllers[`${id}`] = new AbortController();
    const query = `?id=${id}&status=drive`;
    return fetch(BASE_URL + URL + query, { method: Method.PATCH, signal: controllers[`${id}`].signal }).then(
      responceToJSON<Promise<number | string>>,
    );
  },

  abort(id: string) {
    controllers[id]?.abort();
  },
};
