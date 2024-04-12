import './winners.css';
import store, { subscribe } from '../../store/store';
import { Order, Sort, Statistic } from './statistic';
import { Pagination } from './pagination/pagination';
import { BaseComponent } from '../base/base-component';

const LIMIT_WINNERS = 10;

export class Winners extends Statistic {
  node;

  page;

  order: Order;

  sort: Sort;

  private _currentPage;

  h2 = new BaseComponent({ tag: 'h2', textContent: 'Winners', classNames: ['winners_h2'] });

  h3 = new BaseComponent({ tag: 'h3', textContent: 'Page', classNames: ['winners_h3'] });

  pagination = new Pagination(() => {
    this.currentPage -= 1;
  }, this.clickNext.bind(this));

  constructor() {
    super();
    this._currentPage = 1;
    this.order = 'ASC';
    this.sort = 'time';
    this.node = new BaseComponent({ tag: 'section', classNames: ['winners'] });
    const header = new BaseComponent({ classNames: ['winners-header'] });
    const headNum = new BaseComponent({ textContent: 'Number', callback: () => this.clickHeader('id') });
    const headCar = new BaseComponent({ textContent: 'Car' });
    const headName = new BaseComponent({ textContent: 'Name' });
    const headWins = new BaseComponent({ textContent: 'Wins', callback: () => this.clickHeader('wins') });
    const headTime = new BaseComponent({
      textContent: 'Best time (sec)',
      callback: () => this.clickHeader('time'),
    });

    this.page = new BaseComponent({ classNames: ['page'] });
    header.appendNodes(headNum, headCar, headName, headWins, headTime);
    this.node.appendNodes(this.h2, this.h3, header);
    this.node.appendNodes(this.page, this.pagination);
    this.render();
    subscribe('winnersCount', this.render.bind(this));
  }

  public render(): void {
    let html = ``;
    this.getWinners({ page: this._currentPage, limit: LIMIT_WINNERS, order: this.order, sort: this.sort })
      .then((response) => {
        const winnersCount = Number(response.count) || 0;
        if (store.winnersCount !== winnersCount) store.winnersCount = winnersCount;
        this.h2.setTextContent(`Winners (${store.winnersCount})`);
        this.h3.setTextContent(`Page (${this.currentPage})`);
        response.json?.forEach((winner) => {
          const { id, time, wins } = winner;
          const mycar = store.carsTotal.filter((car) => car.id === id);
          if (mycar.length === 0) return;
          const { name, color } = mycar[0];
          html += `<div>${id}</div>
              <div>
              <div class="winners-car1"><div style="background-color: ${color}" class="winners-car"></div></div>
              </div>
              <div>${name}</div><div>${wins}</div><div>${time}</div>`;
        });
        this.page.getNode().innerHTML = html;
      })
      .catch((e) => console.warn('getWinners', e));
    if (this.currentPage >= store.winnersCount / LIMIT_WINNERS) {
      this.pagination.enableNext(false);
    } else this.pagination.enableNext(true);
    if (this.currentPage < 2) {
      this.pagination.enablePrev(false);
    } else this.pagination.enablePrev(true);
  }

  private changeSortOrder() {
    this.order = this.order === 'ASC' ? 'DESC' : 'ASC';
  }

  private clickHeader(sort: Sort) {
    if (this.sort === sort) {
      this.changeSortOrder();
    } else this.sort = sort;
    this.render();
  }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(num: number) {
    this._currentPage = num;
    this.render();
  }

  private clickNext() {
    this.currentPage += 1;
  }
}
