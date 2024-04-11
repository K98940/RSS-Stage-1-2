import { MyResponse } from '../types/types';
import { BASE_URL, Method } from './config';
import { responceToJSON } from '../utils/utils';

const URL = '/engine';

export const engine = {
  setStatus(id: number, status: 'started' | 'stopped'): Promise<Error | MyResponse> {
    const query = `?id=${id}&status=${status}`;
    return fetch(BASE_URL + URL + query, { method: Method.PATCH })
      .then(responceToJSON<Promise<Error | MyResponse>>)
      .catch((e) => new Error(e));
  },
};
