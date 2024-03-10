import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';
import { Data } from '../../../components/app/utils/data';
import { Field } from './field/field';
import './game.css';

const START_PAGE = 1;

export class Game extends MyElement {
  state;

  constructor() {
    super({ classNames: ['game'] });
    this.state = new State();
    this.state.subscribe(this);
    this.config();
  }

  private config() {
    const data = new Data();
    const field = new Field(this);
    const page = data.getPage(START_PAGE);
    field.createMatrix(page);
  }

  public update(): void {}
}
