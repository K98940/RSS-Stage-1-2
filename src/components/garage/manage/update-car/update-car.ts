import './update-car.css';
import { Input } from '../../../base/input/input';
import { Button } from '../../../base/button/button';
import store, { subscribe } from '../../../../store/store';
import { BaseComponent } from '../../../base/base-component';

export class UpdateCar extends BaseComponent {
  inputUpdateName = new Input(['update__input']);

  inputCreateColor = new Input(['color__input']);

  buttonUpdateCar = new Button({ textContent: 'UPDATE', callback: this.updateCar.bind(this) });

  constructor() {
    super({ classNames: ['container-update'] });
    this.inputCreateColor.setAttributes([['type', 'color']]);
    this.appendNodes(this.inputUpdateName, this.inputCreateColor, this.buttonUpdateCar);
    subscribe('state', this.update.bind(this));
    subscribe('currentID', this.update.bind(this));
  }

  private updateCar() {
    const node = this.inputUpdateName.getNode();
    if (node instanceof HTMLInputElement) {
      const name = node.value.trim();
      if (!name) return;
      store.carColor = this.inputCreateColor.value() || '';
      document.dispatchEvent(new CustomEvent('clickUpdate', { detail: { name } }));
    }
  }

  public update(): void {
    const name = this.inputUpdateName.getNode();
    if (name instanceof HTMLInputElement) name.value = store.updateCarName;
    const color = this.inputCreateColor.getNode();
    if (color instanceof HTMLInputElement && store.updateCarColor) color.value = store.updateCarColor;

    switch (store.state) {
      case 'idle':
        this.inputUpdateName.removeClass('button_disabled');
        this.buttonUpdateCar.removeClass('button_disabled');
        break;
      case 'race':
        this.inputUpdateName.setClasses(['button_disabled']);
        this.buttonUpdateCar.setClasses(['button_disabled']);
        break;
      case 'reset':
        this.inputUpdateName.removeClass('button_disabled');
        this.buttonUpdateCar.removeClass('button_disabled');
        break;
      case 'race-over':
        this.inputUpdateName.removeClass('button_disabled');
        this.buttonUpdateCar.removeClass('button_disabled');
        break;
    }
  }
}
