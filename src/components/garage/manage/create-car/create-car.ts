import { BaseComponent } from '../../../base/base-component';
import { Input } from '../../../base/input/input';
import { Button } from '../../../base/button/button';
import './create-car.css';
import store from '../../../../store/store';

export class CreateCar extends BaseComponent {
  inputCreateName;

  buttonCreateCar;

  constructor() {
    super({ classNames: ['container-create'] });
    this.inputCreateName = new Input(['create__input']);
    this.buttonCreateCar = new Button({
      textContent: 'CREATE',
      callback: () => this.createCar(),
    });
    this.appendNodes(this.inputCreateName, this.buttonCreateCar);
  }

  private createCar() {
    const node = this.inputCreateName.getNode();
    store.carName = this.inputCreateName.value()?.trim() || '';
    if (node instanceof HTMLInputElement) node.value = '';
  }
}
