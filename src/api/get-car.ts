import { TCar } from '../types/types';
import { BASE_URL } from './config';
const URL = '/garage';
const LIMIT_WINNERS = 7;

export const get = {
  async cars(page: number, limit?: number): Promise<TCar[] | undefined> {
    const limitQuery = limit ? `&_limit=${limit}` : `&_limit=${LIMIT_WINNERS}`;
    const query = `?_page=${page}` + limitQuery;

    try {
      const response = await fetch(BASE_URL + URL + query);
      if (!response.ok) throw new Error(`(${response.status}) ${response.statusText}`);
      const data: TCar[] = await response.json();
      return data;
    } catch (error) {
      // return error;
    }
  },

  async carsCount(): Promise<string | null | undefined> {
    const limitQuery = `&_limit=1`;
    const query = `?_page=1` + limitQuery;

    try {
      const response = await fetch(BASE_URL + URL + query);
      if (!response.ok) throw new Error(`(${response.status}) ${response.statusText}`);
      return response.headers.get('X-Total-Count');
    } catch (error) {}
  },
};
