import { View } from './../../types/types';
import { BaseComponent } from '../base/base-component';
import { Garage } from '../garage/garage';
import { Header } from '../header/header';
import { Winners } from '../winners/winners';
import './app.css';

export class App extends BaseComponent {
  header;

  garage;

  winners;

  constructor() {
    super({ classNames: ['container'] });
    this.header = new Header();
    this.garage = new Garage();
    this.winners = new Winners();
    this.appendNodes(this.header, this.garage);
    window.addEventListener('hashchange', this.router);
  }

  router = () => {
    const hash = window.location.hash.replace('#', '');
    switch (hash) {
      case View.garage:
        this.getNode().removeChild(this.winners.getNode());
        this.appendNodes(this.garage);
        break;
      case View.winners:
        this.getNode().removeChild(this.garage.getNode());
        this.appendNodes(this.winners);
        break;
    }
  };
}
