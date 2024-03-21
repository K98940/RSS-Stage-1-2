import { BASE_URL, Method } from './config';

const URL = '/garage';

export const remove = {
  async car(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + URL + `/${id}`, { method: Method.DELETE })
        .then((response) => {
          if (!response.ok) throw new Error();
          resolve(true);
        })
        .catch(() => reject(false));
    });
  },
};
