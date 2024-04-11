import { responceToJSON } from '../../utils/utils';
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
type WinneR = Winner | Error;
type PropsCreateWinner = {
  id: number;
  wins: number;
  time: number;
};

const HEADER_X_TOTAL = 'X-Total-Count';

export class Statistic {
  public getWinners({ page = 1, limit = 10, sort = 'time', order = 'ASC' }: PropsGetWinnerS) {
    const URL = '/winners';
    const QUERY = `/?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
    return fetch(BASE_URL + URL + QUERY).then(responceToJSON<Promise<Winner[]>>);
  }

  public getWinnersCount(): Promise<number> {
    const URL = '/winners';
    const QUERY = `/?_page=1&_limit=1`;
    return fetch(BASE_URL + URL + QUERY).then((result) => {
      // TODO getWinners() + getWinnersCount()
      if (!result.ok) throw new Error(result.statusText);
      const totalCount = result.headers.get(HEADER_X_TOTAL);
      return Number(totalCount) || 0;
    });
  }

  public getWinneR({ id }: PropsGetWinneR) {
    const URL = '/winners';
    const QUERY = `/${id}`;
    return fetch(BASE_URL + URL + QUERY).then(responceToJSON<Promise<PropsCreateWinner | Error>>);
  }

  public createWinner({ id, wins = 0, time }: PropsCreateWinner) {
    const URL = '/winners';
    const APPLICATION_JSON = 'application/json';
    const QUERY = { id, wins, time };
    return fetch(BASE_URL + URL, {
      method: Method.POST,
      headers: {
        'Content-Type': APPLICATION_JSON,
      },
      body: JSON.stringify(QUERY),
    }).then(responceToJSON<Promise<Winner | Error>>);
  }

  public updateWinner({ id, wins, time }: PropsCreateWinner) {
    const URL = `/winners/${id}`;
    const APPLICATION_JSON = 'application/json';
    const QUERY = { wins, time };
    return fetch(BASE_URL + URL, {
      method: Method.PUT,
      headers: {
        'Content-Type': APPLICATION_JSON,
      },
      body: JSON.stringify(QUERY),
    }).then(responceToJSON<Promise<WinneR | Error>>);
  }

  public deleteWinner({ id }: { id: number }) {
    const URL = `/winners/${id}`;
    return fetch(BASE_URL + URL, { method: Method.DELETE }).then(responceToJSON<Promise<object | Error>>);
  }
}
