import { get } from '../../api/get-car';
import { Statistic } from '../../api/statistic';
import store from '../../store/store';
import { Order, Sort, WinnersPage } from '../../types/types';

export class WinnersController extends Statistic {
  protected _currentPage;

  protected LIMIT_WINNERS = 10;

  protected order: Order;

  protected sort: Sort;

  constructor() {
    super();
    this._currentPage = 1;
    this.order = 'ASC';
    this.sort = 'time';
  }

  public update() {
    const promises = [get.carsTotal(), this.getWinners()];
    return Promise.all(promises)
      .then((responses) => {
        if (Array.isArray(responses[0])) store.carsTotal = responses[0];
        if ('json' in responses[1]) this.setWinners(responses[1]);
      })
      .catch((e) => console.warn(e));
  }

  protected getWinners(): Promise<WinnersPage> {
    return this.getPage({ page: this._currentPage, limit: this.LIMIT_WINNERS, order: this.order, sort: this.sort });
  }

  protected setWinners(winers: WinnersPage): void {
    store.winners = winers.json;
    const winnersCount = Number(winers.count) || 0;
    if (store.winnersCount !== winnersCount) store.winnersCount = winnersCount;
  }
}
