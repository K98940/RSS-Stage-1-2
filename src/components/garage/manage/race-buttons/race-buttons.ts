import './race-buttons.css';
import { Button } from '../../../button/button';
import { Callback } from '../../../../types/types';
import { BaseComponent } from '../../../base/base-component';
import store, { subscribe } from '../../../../store/store';

export class RaceButtons extends BaseComponent {
  buttonRace = new Button({ textContent: 'RACE' });

  buttonReset = new Button({ textContent: 'RESET', classNames: ['button_disabled'] });

  buttonGenerate = new Button({ textContent: 'GENERATE CARS' });

  constructor(start: Callback<Event>, reset: Callback<Event>, generate: Callback<Event>) {
    super({ classNames: ['race-buttons'] });
    this.appendNodes(this.buttonRace, this.buttonReset, this.buttonGenerate);

    this.buttonRace.setCallback(start);
    this.buttonReset.setCallback(reset);
    this.buttonGenerate.setCallback(generate);
    subscribe('state', this.updateCarsCount.bind(this));
  }

  public updateCarsCount(): void {
    switch (store.state) {
      case 'idle':
        this.buttonRace.removeClass('button_disabled');
        this.buttonReset.setClasses(['button_disabled']);
        this.buttonGenerate.removeClass('button_disabled');
        break;
      case 'race':
        this.buttonRace.setClasses(['button_disabled']);
        this.buttonReset.setClasses(['button_disabled']);
        this.buttonGenerate.setClasses(['button_disabled']);
        break;
      case 'reset':
        this.buttonRace.setClasses(['button_disabled']);
        this.buttonReset.setClasses(['button_disabled']);
        this.buttonGenerate.setClasses(['button_disabled']);
        break;
      case 'race-over':
        this.buttonRace.setClasses(['button_disabled']);
        this.buttonReset.removeClass('button_disabled');
        this.buttonGenerate.removeClass('button_disabled');
        break;
    }
  }
}
