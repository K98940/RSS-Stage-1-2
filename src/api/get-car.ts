import { TCar } from '../types/types';
import { BASE_URL } from './config';
const URL = '/garage';
const LIMIT_WINNERS = 7;
import { responceToJSON } from '../utils/utils';

export const get = {
  cars(page: number, limit?: number) {
    const limitQuery = limit ? `&_limit=${limit}` : `&_limit=${LIMIT_WINNERS}`;
    const query = `?_page=${page}` + limitQuery;
    return fetch(BASE_URL + URL + query).then(responceToJSON<Promise<TCar[] | undefined>>);
  },

  // TODO cars() + carsCount()
  carsCount() {
    return fetch(BASE_URL + URL).then(responceToJSON<Promise<Response | unknown>>);
  },
};
