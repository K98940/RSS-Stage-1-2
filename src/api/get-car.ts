import { APICar } from '../types/types';
import { BASE_URL } from './config';
const URL = '/garage';

export const get = {
  async cars(page: number, limit?: number): Promise<APICar[]> {
    const limitQuery = limit ? `&_limit=${limit}` : '';
    const query = `?_page=${page}` + limitQuery;

    try {
      const response = await fetch(BASE_URL + URL + query);
      if (!response.ok)
        throw new Error(`(${response.status}) ${response.statusText}`);
      const data: APICar[] = await response.json();
      return data;
    } catch (error) {
      return [{ color: '', id: 0, name: '', error: `${error}` }];
    }
  },
};
