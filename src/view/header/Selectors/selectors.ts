import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';
import { Data } from '../../../components/app/utils/data';
import { Select } from '../../../components/select/select';
import { Actions } from '../../../types/types';
import './selectors.css';

export class Selectors extends MyElement {
  data;

  state;

  level;

  round;

  constructor() {
    super({ classNames: ['selectors-container'] });
    this.data = new Data();
    this.state = new State();
    this.state.subscribeLevel(this);

    const fieldset = new MyElement({
      tag: 'fieldset',
      classNames: ['selectors-fieldset'],
    });
    const legend = new MyElement({
      tag: 'legend',
      textContent: 'select round',
      classNames: ['selectors-legend'],
    });
    const listLevels = this.data.getListLevels();
    const listRound = this.data.getListRounds();
    this.level = new Select({
      id: 'level',
      name: 'level',
      text: 'Level',
      options: listLevels,
    });
    this.round = new Select({
      id: 'round',
      name: 'round',
      text: 'Round',
      options: listRound,
    });

    fieldset.appendNodes(legend, this.level, this.round);
    this.appendNodes(fieldset);

    document.addEventListener(Actions.changeLevel, (e) => {
      if (e instanceof CustomEvent) {
        switch (e.detail.id) {
          case 'level':
            this.state.level = `${e.detail.value}`;
            this.state.round = 0;
            const options = this.data.getListRounds();
            this.round.updateOptions(options);
            break;
          case 'round':
            break;
        }
      }
    });
  }

  public updateValue(): void {
    this.level.updateValue(this.state.level);
    this.round.updateValue(this.state.round);
  }
}
