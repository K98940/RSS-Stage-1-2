import { View } from './../../types/types';
import { BaseComponent } from '../base/base-component';
import { Garage } from '../garage/garage';
import { Header } from '../header/header';
import { Winners } from '../winners/winners';
import './app.css';
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
    this.appendNodes(this.header, this.garage.node);
    this.config();
    window.location.hash = View.garage;
    window.addEventListener('hashchange', this.router);
  }

  private async config() {
    this.garage.getCars(store.page);
  }

  router = () => {
    const hash = window.location.hash.replace('#', '');
    switch (hash) {
      case View.garage:
        this.winners.node.getNode().remove();
        this.garage.node.removeClass('hidden');
        break;
      case View.winners:
        this.garage.node.setClasses(['hidden']);
        this.winners.render();
        this.appendNodes(this.winners.node.getNode());
        break;
    }
  };
}
