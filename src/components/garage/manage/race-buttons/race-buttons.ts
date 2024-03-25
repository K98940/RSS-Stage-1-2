import './race-buttons.css';
import { Button } from '../../../button/button';
import { Callback } from '../../../../types/types';
import { BaseComponent } from '../../../base/base-component';
// FIX кнопки должны блокироваться
export class RaceButtons extends BaseComponent {
  constructor(star: Callback<Event>, reset: Callback<Event>, generate: Callback<Event>) {
    super({ classNames: ['race-buttons'] });
    this.appendNodes(new Button({ textContent: 'RACE', callback: star }));
    this.appendNodes(new Button({ textContent: 'RESET', callback: reset }));
    this.appendNodes(new Button({ textContent: 'GENERATE CARS', callback: generate }));
  }
}
