import './garage-title.css';
import store, { subscribe } from '../../../store/store';
import { BaseComponent } from '../../base/base-component';
import { Span } from '../../base/span/span';

export class GarageTitle extends BaseComponent {
  count = new Span(`Garage (${store.carsCount})`);

  page = new Span(`Page (${store.page})`);

  constructor() {
    super({ classNames: ['garage-title'] });
    this.appendNodes(this.count, this.page);
    subscribe('carsCount', this.updateCount.bind(this));
    subscribe('page', this.updatePage.bind(this));
  }

  private updateCount() {
    this.count.setTextContent(`Garage (${store.carsCount})`);
  }

  private updatePage() {
    this.page.setTextContent(`Page (${store.page})`);
  }
}
