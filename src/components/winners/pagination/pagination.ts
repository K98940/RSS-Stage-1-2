import './pagination.css';
import { Button } from '../../button/button';
import { BaseComponent } from '../../base/base-component';
import { TCallback } from '../../../types/types';

export class Pagination extends BaseComponent {
  next;

  prev;

  private btnPrev = new Button({
    textContent: 'PREV',
    classNames: ['button_disabled'],
    callback: this.clickPrev.bind(this),
  });

  private btnNext = new Button({ textContent: 'NEXT', callback: this.clickNext.bind(this) });

  constructor(prev: TCallback, next: TCallback) {
    super({ classNames: ['pagination'] });
    this.next = next;
    this.prev = prev;
    this.appendNodes(this.btnPrev, this.btnNext);
  }

  public enablePrev(state: boolean) {
    if (state) {
      this.btnPrev.removeClass('button_disabled');
    } else this.btnPrev.setClasses(['button_disabled']);
  }

  public enableNext(state: boolean) {
    if (state) {
      this.btnNext.removeClass('button_disabled');
    } else this.btnNext.setClasses(['button_disabled']);
  }

  private clickNext() {
    this.next();
  }

  private clickPrev() {
    this.prev();
  }
}
