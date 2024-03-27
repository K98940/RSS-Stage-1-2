import './create-car.css';
import store from '../../../../store/store';
import { Input } from '../../../base/input/input';
import { Button } from '../../../base/button/button';
import { BaseComponent } from '../../../base/base-component';

export class CreateCar extends BaseComponent {
  inputCreateName = new Input(['create__input']);

  inputCreateColor = new Input(['color__input']);

  buttonCreateCar = new Button({
    textContent: 'CREATE',
    classNames: ['button_disabled'],
    callback: () => this.createCar(),
  });

  constructor() {
    super({ classNames: ['container-create'] });
    this.inputCreateName.setAttributes([['placeholder', 'new car name']]);
    this.inputCreateColor.setAttributes([['type', 'color']]);
    this.appendNodes(this.inputCreateName, this.inputCreateColor, this.buttonCreateCar);
    this.inputCreateName.setCallback(this.handleInput.bind(this), 'keyup');
  }

  private createCar() {
    const node = this.inputCreateName.getNode();
    store.carColor = this.inputCreateColor.value() || '';
    const name = this.inputCreateName.value()?.trim() || '';
    if (!name) return;
    store.carName = name;
    if (node instanceof HTMLInputElement) node.value = '';
  }

  private handleInput(e: Event | undefined): void {
    if (!e) return;
    const { target } = e;
    if (target instanceof HTMLInputElement) {
      if (target.value.trim() !== '') {
        this.buttonCreateCar.removeClass('button_disabled');
      } else this.buttonCreateCar.setClasses(['button_disabled']);
    }
  }
}
