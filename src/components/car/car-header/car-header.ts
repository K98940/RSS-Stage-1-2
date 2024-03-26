import './car-header.css';
import { Car } from '../car';
import store, { subscribe } from '../../../store/store';
import { Span } from '../../base/span/span';
import { Button } from './../../button/button';
import { BaseComponent } from '../../base/base-component';

export class CarHeader extends BaseComponent {
  btnSelect = new Button({ textContent: 'SELECT', callback: this.clickSelect.bind(this) });

  btnDelete = new Button({ textContent: 'REMOVE', callback: this.clickRemove.bind(this) });

  car;

  constructor(car: Car) {
    super({ classNames: ['car-header'] });
    this.car = car;
    this.appendNodes(this.btnSelect, this.btnDelete, new Span(this.car.name));
    subscribe('state', this.update.bind(this));
  }

  private clickRemove(): void {
    // BUG с машиной надо также удалить рекорды
    if (this.car.id) {
      document.dispatchEvent(new CustomEvent('removeCar', { detail: { id: this.car.id } }));
      store.updateCarColor = '';
      store.updateCarName = '';
      store.currentID = 0;
    }
  }

  private clickSelect(): void {
    if (this.car.id) {
      store.updateCarColor = this.car.color;
      store.updateCarName = this.car.name;
      store.currentID = this.car.id;
    }
  }

  public update(): void {
    switch (store.state) {
      case 'idle':
        this.btnSelect.removeClass('button_disabled');
        this.btnDelete.removeClass('button_disabled');
        break;
      case 'race':
        this.btnSelect.setClasses(['button_disabled']);
        this.btnDelete.setClasses(['button_disabled']);
        break;
    }
  }
}
