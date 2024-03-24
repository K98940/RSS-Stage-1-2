import { BASE_URL, Method } from '../../api/config';

type Winner = {
  id: number;
  wins: number;
  time: number;
};
export type Sort = 'id' | 'wins' | 'time';
export type Order = 'ASC' | 'DESC';
type PropsGetWinnerS = {
  page?: number;
  limit?: number;
  sort?: Sort;
  order?: Order;
};
type PropsGetWinneR = {
  id: number;
};
type WinnerS = Winner[] | Error;
type WinneR = Winner | Error;
type PropsCreateWinner = {
  id: number;
  wins: number;
  time: number;
};

// const HEADER_X_TOTAL = 'X-Total-Count';

export class Statistic {
  public async getWinners({ page = 1, limit = 10, sort = 'time', order = 'ASC' }: PropsGetWinnerS): Promise<Winner[]> {
    const URL = '/winners';
    const QUERY = `/?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;

    return new Promise((resolve, reject) => {
      fetch(BASE_URL + URL + QUERY)
        .then((result) => {
          if (!result.ok) throw new Error(result.statusText);
          // const totalCount = result.headers.get(HEADER_X_TOTAL);
          return result.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  public async getWinneR({ id }: PropsGetWinneR): Promise<PropsCreateWinner | Error> {
    const URL = '/winners';
    const QUERY = `/${id}`;

    return new Promise((resolve, reject) => {
      fetch(BASE_URL + URL + QUERY)
        .then((result) => {
          if (!result.ok) throw new Error(result.statusText);
          // const totalCount = result.headers.get(HEADER_X_TOTAL);
          return result.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  public async createWinner({ id, wins = 0, time }: PropsCreateWinner): Promise<Winner | Error> {
    const URL = '/winners';
    const APPLICATION_JSON = 'application/json';
    const QUERY = { id, wins, time };

    return new Promise((resolve, reject) => {
      fetch(BASE_URL + URL, {
        method: Method.POST,
        headers: {
          'Content-Type': APPLICATION_JSON,
        },
        body: JSON.stringify(QUERY),
      })
        .then((result) => {
          if (!result.ok) throw new Error(result.statusText);
          return result.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  public async updateWinner({ id, wins, time }: PropsCreateWinner): Promise<WinneR | Error> {
    const URL = `/winners/${id}`;
    const APPLICATION_JSON = 'application/json';
    const QUERY = { wins, time };

    return new Promise((resolve, reject) => {
      fetch(BASE_URL + URL, {
        method: Method.PUT,
        headers: {
          'Content-Type': APPLICATION_JSON,
        },
        body: JSON.stringify(QUERY),
      })
        .then((result) => {
          if (!result.ok) throw new Error(result.statusText);
          return result.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  public async deleteWinner({ id }: { id: number }): Promise<object | Error> {
    const URL = `/winners/${id}`;

    return new Promise((resolve, reject) => {
      fetch(BASE_URL + URL, { method: Method.DELETE })
        .then((result) => {
          if (!result.ok) throw new Error(result.statusText);
          return result.json();
        })
        .then(() => resolve({}))
        .catch((error) => reject(error));
    });
  }
}
