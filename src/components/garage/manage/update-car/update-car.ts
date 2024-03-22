import { data } from '../../../../data/data';
import { BaseComponent } from '../../../base/base-component';
import { Input } from '../../../base/input/input';
import { Button } from '../../../base/button/button';
import './update-car.css';
import store from '../../../../store/store';

export class UpdateCar extends BaseComponent {
  inputUpdateName;

  buttonUpdateCar;

  constructor() {
    super({ classNames: ['container-update'] });
    this.inputUpdateName = new Input(['update__input']);
    this.buttonUpdateCar = new Button({
      textContent: 'UPDATE',
      callback: this.updateCar.bind(this),
    });
    this.appendNodes(this.inputUpdateName, this.buttonUpdateCar);
  }

  private updateCar() {
    const name = this.inputUpdateName.value()?.trim();
    const id = store.currentID;
    const color = store.cars.filter((car) => car.id === id)[0].color;
    if (name && id >= 0) {
      data.updateCar(id, { name, color });
    }
  }
}
