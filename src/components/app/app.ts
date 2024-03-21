import { View } from './../../types/types';
import { BaseComponent } from '../base/base-component';
import { Garage } from '../garage/garage';
import { Header } from '../header/header';
import { Winners } from '../winners/winners';
import './app.css';
import { data } from '../../data/data';
import store from '../../store/store';

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
    this.config();
    window.addEventListener('hashchange', this.router);
  }

  private async config() {
    const cars = await data.getCars(1);
    if (cars[0].error) {
      console.log(cars[0].error);
      return;
    }
    store.cars = cars;
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
