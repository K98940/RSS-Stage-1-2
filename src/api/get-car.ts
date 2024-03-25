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

  async carsCount(): Promise<Response | unknown> {
    // async carsCount(): Promise<string | null | undefined> {
    const limitQuery = `&_limit=0`;
    const query = `?_page=1`;

    try {
      const response = await fetch(BASE_URL + URL);
      if (!response.ok) throw new Error(`(${response.status}) ${response.statusText}`);
      return await response.json();
    } catch (error: unknown) {
      return error;
    }
  },
};
