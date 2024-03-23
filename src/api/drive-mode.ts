import { BASE_URL, Method } from './config';

const URL = '/engine';
type Response = {
  success: boolean;
};

export const drive = {
  async go(id: number): Promise<Response | string> {
    return new Promise((resolve, reject) => {
      const query = `?id=${id}&status=drive`;
      fetch(BASE_URL + URL + query, { method: Method.PATCH })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`${response.status}`);
            // reject(response.status);
          }
          resolve(`${response.status}`);
        })
        .catch((error: Error) => reject(error.message));
    });
  },
};
