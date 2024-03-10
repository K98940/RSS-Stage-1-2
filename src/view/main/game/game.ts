import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';
import './game.css';

export class Game extends MyElement {
  state;

  constructor() {
    super({ classNames: ['game'] });
    this.state = new State();
    this.state.subscribe(this);
  }

  public update(): void {}
}
