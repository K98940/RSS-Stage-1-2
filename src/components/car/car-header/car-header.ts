import './car-header.css';
import { Car } from '../car';
import store from '../../../store/store';
import { Span } from '../../base/span/span';
import { Button } from './../../button/button';
import { BaseComponent } from '../../base/base-component';

export class CarHeader extends BaseComponent {
  btnSelect;

  btnDelete;

  car;

  constructor(car: Car) {
    super({ classNames: ['car-header'] });
    this.car = car;
    this.btnDelete = new Button({
      textContent: 'REMOVE',
      callback: this.clickRemove.bind(this),
    });
    this.btnSelect = new Button({
      textContent: 'SELECT',
      callback: this.clickSelect.bind(this),
    });
    this.appendNodes(this.btnSelect, this.btnDelete, new Span(this.car.name));
  }

  private clickRemove(): void {
    if (this.car.id)
      document.dispatchEvent(
        new CustomEvent('removeCar', { detail: { id: this.car.id } }),
      );
  }

  private clickSelect(): void {
    if (this.car.id) store.currentID = this.car.id;
  }
}
