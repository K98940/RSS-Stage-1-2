import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';
import { Data } from '../../../components/app/utils/data';
import { Field } from './field/field';
import './game.css';

let page = 0;

export class Game extends MyElement {
  state;

  data: Data;

  field: Field;

  constructor() {
    super({ classNames: ['game'] });
    this.state = new State();
    this.state.subscribe(this);
    this.data = new Data();
    this.field = new Field(this);
    this.config();

    document.addEventListener('new-level', () => {
      page += 1;
      this.config();
    });
  }

  private config() {
    const pageData = this.data.getPage(page);
    this.field.createMatrix(pageData);
  }

  public update(): void {}
}
