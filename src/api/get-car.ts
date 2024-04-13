import { TCar } from '../types/types';
import { BASE_URL } from './config';
import { processResponse, responceToJSON } from '../utils/utils';
const URL = '/garage';
const LIMIT_WINNERS = 7;

export const get = {
  carsPage(page: number, limit?: number) {
    const limitQuery = limit ? `&_limit=${limit}` : `&_limit=${LIMIT_WINNERS}`;
    const query = `?_page=${page}` + limitQuery;
    return fetch(BASE_URL + URL + query).then(processResponse<TCar[]>);
  },

  // метод необходим, т.к. от api /winners данные приходят в виде:
  // {
  //  "id": 16,
  //  "wins": 1,
  //  "time": 2.92
  // }
  // и дополнительно нужно запрашивать данные по всем машинам
  carsTotal() {
    return fetch(BASE_URL + URL).then(responceToJSON<Promise<TCar[]>>);
  },
};
