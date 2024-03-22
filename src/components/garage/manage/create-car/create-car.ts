import { data } from '../../../../data/data';
import { BaseComponent } from '../../../base/base-component';
import { Input } from '../../../base/input/input';
import { Button } from '../../../base/button/button';
import './create-car.css';

export class CreateCar extends BaseComponent {
  inputCreateName;

  buttonCreateCar;

  constructor() {
    super({ classNames: ['container-create'] });
    this.inputCreateName = new Input(['create__input']);
    this.buttonCreateCar = new Button({
      textContent: 'CREATE',
      callback: this.createCar.bind(this),
    });
    this.appendNodes(this.inputCreateName, this.buttonCreateCar);
  }

  private createCar() {
    const name = this.inputCreateName.value()?.trim();
    if (name) {
      data.createCar({ name, color: 'green' });
    }
  }
}
