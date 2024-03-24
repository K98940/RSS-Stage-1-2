import './winners.css';
import store from '../../store/store';
import { Order, Sort, Statistic } from './statistic';
import { BaseComponent } from '../base/base-component';

const LIMIT_WINNERS = 10;

export class Winners extends Statistic {
  node;

  page;

  order: Order;

  sort: Sort;

  private _currentPage;

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
      textContent: 'Best time (seconds)',
      callback: () => this.clickHeader('time'),
    });

    this.page = new BaseComponent({ classNames: ['page'] });
    header.appendNodes(headNum, headCar, headName, headWins, headTime);
    this.node.appendNodes(header);
    this.node.appendNodes(this.page);
    this.render();
  }

  public render(): void {
    let html = ``;
    this.getWinners({ page: this._currentPage, limit: LIMIT_WINNERS, order: this.order, sort: this.sort })
      .then((winners) => {
        winners.forEach((winner) => {
          const { id, time, wins } = winner;
          const { name, color } = store.cars.filter((car) => car.id === id)[0];
          html += `
          <div>${id}</div>
          <div>${color}</div>
          <div>${name}</div>
          <div>${wins}</div>
          <div>${time}</div>`;
        });
        this.page.getNode().innerHTML = html;
      })
      .catch((e) => {});
  }

  private changeSortOrder() {
    this.order = this.order === 'ASC' ? 'DESC' : 'ASC';
  }

  private clickHeader(sort: Sort) {
    if (this.sort === sort) {
      this.changeSortOrder();
    } else {
      this.sort = sort;
    }
    this.render();
  }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(num: number) {
    this._currentPage = num;
  }
}
