import { MyResponse } from '../types/types';
import { BASE_URL, Method } from './config';

const URL = '/engine';

export const engine = {
  async setStatus(id: number, status: 'started' | 'stopped'): Promise<Error | MyResponse> {
    return new Promise((resolve, reject) => {
      const query = `?id=${id}&status=${status}`;
      fetch(BASE_URL + URL + query, { method: Method.PATCH })
        .then((response) => {
          if (!response.ok) throw new Error(`${response.status}`);
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error: Error) => reject(error.message));
    });
  },
};
