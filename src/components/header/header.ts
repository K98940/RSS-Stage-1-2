import { View } from './../../types/types';
import { BaseComponent } from '../base/base-component';
import { Button } from '../base/button/button';
import './header.css';

const buttons = {
  garage: {
    title: 'TO GARAGE',
  },
  winners: {
    title: 'TO WINNERS',
  },
};

const clickToGarage = () => {
  location.hash = View.garage;
};

const clickToWinners = () => {
  location.hash = View.winners;
};

export class Header extends BaseComponent {
  constructor() {
    super({ tag: 'header', classNames: ['header'] });
    this.config();
  }

  config() {
    const buttonToGarage = new Button({
      textContent: buttons.garage.title,
      callback: clickToGarage,
    });
    const buttonToWinners = new Button({
      textContent: buttons.winners.title,
      callback: clickToWinners,
    });
    this.appendNodes(buttonToGarage, buttonToWinners);
  }
}
