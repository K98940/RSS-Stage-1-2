import './update-car.css';
import { BaseComponent } from '../../../base/base-component';
import { Input } from '../../../base/input/input';
import { Button } from '../../../base/button/button';

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
    const node = this.inputUpdateName.getNode();
    if (node instanceof HTMLInputElement) {
      const name = node.value.trim();
      node.value = '';
      if (!name) return;
      document.dispatchEvent(
        new CustomEvent('clickUpdate', { detail: { name } }),
      );
    }
  }
}
