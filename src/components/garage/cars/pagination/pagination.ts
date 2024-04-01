import './pagination.css';
import store, { subscribe } from '../../../../store/store';
import { Button } from '../../../button/button';
import { BaseComponent } from '../../../base/base-component';

export class Pagination extends BaseComponent {
  private btnPrev = new Button({
    textContent: 'PREV',
    classNames: ['button_disabled'],
    callback: this.clickPrev.bind(this),
  });

  private btnNext = new Button({ textContent: 'NEXT', callback: this.clickNext.bind(this) });

  constructor() {
    super({ classNames: ['pagination'] });
    this.appendNodes(this.btnPrev, this.btnNext);
    subscribe('carsCount', this.updateCarsCount.bind(this));
    subscribe('state', this.updateState.bind(this));
  }

  private clickNext() {
    if (store.carsCount / store.carsPerPage <= store.page) return;
    store.page += 1;
    store.currentID = -1;
    store.state = 'idle';
    this.btnPrev.removeClass('button_disabled');
    if (store.carsCount / store.carsPerPage <= store.page) this.btnNext.setClasses(['button_disabled']);
  }

  private clickPrev() {
    store.page = store.page > 1 ? store.page - 1 : 1;
    store.currentID = -1;
    store.state = 'idle';
    if (store.page < 2) this.btnPrev.setClasses(['button_disabled']);
  }

  public updateCarsCount(): void {
    if (store.carsCount / store.carsPerPage <= store.page) {
      this.btnNext.setClasses(['button_disabled']);
    } else this.btnNext.removeClass('button_disabled');
  }

  public updateState(): void {
    if (store.state === 'idle' || store.state === 'reset' || store.state === 'race-over') {
      if (store.page > 1) this.btnPrev.removeClass('button_disabled');
      if (store.carsCount / store.carsPerPage > store.page) this.btnNext.removeClass('button_disabled');
    }
    if (store.state === 'race') {
      this.btnNext.setClasses(['button_disabled']);
      this.btnPrev.setClasses(['button_disabled']);
    }
  }
}
