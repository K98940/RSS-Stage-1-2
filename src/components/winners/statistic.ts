import { processResponse, responceToJSON } from '../../utils/utils';
import { BASE_URL, Method } from '../../api/config';

type Winner = {
  id: number;
  wins: number;
  time: number;
};
export type Sort = 'id' | 'wins' | 'time';
export type Order = 'ASC' | 'DESC';
type PropsGetWinneR = {
  id: number;
};
type WinneR = Winner | Error;

export class Statistic {
  public getWinners({ page = 1, limit = 10, sort = 'time', order = 'ASC' }) {
    const URL = '/winners';
    const QUERY = `/?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
    return fetch(BASE_URL + URL + QUERY).then(processResponse<Winner[]>);
  }

  public getWinneR({ id }: PropsGetWinneR) {
    const URL = '/winners';
    const QUERY = `/${id}`;
    return fetch(BASE_URL + URL + QUERY).then(responceToJSON<Promise<Winner | Error>>);
  }

  public createWinner({ id, wins = 0, time }: Winner) {
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

  public updateWinner({ id, wins, time }: Winner) {
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
