import './game.css';
import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';
import { Data } from '../../../components/app/utils/data';
import { Actions } from '../../../types/types';
import { Field } from './field/field';
import imgBg01 from './field/bg-container-level1.webp';
import imgBg02 from './field/bg-container-level2.webp';
import imgBg03 from './field/bg-container-level3.webp';
import imgBg04 from './field/bg-container-level4.webp';
import imgBg05 from './field/bg-container-level5.webp';
import imgBg06 from './field/bg-container-level6.webp';

type ImageList = {
  [id: string]: string;
};

const bgImageList: ImageList = {
  level1: imgBg01,
  level2: imgBg02,
  level3: imgBg03,
  level4: imgBg04,
  level5: imgBg05,
  level6: imgBg06,
};

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

    document.addEventListener(Actions.newLevel, () => {
      this.state.round += 1;
      this.state.currentLine = 0;
      this.config();
    });
    document.addEventListener(Actions.changeLevel, (e) => {
      if (e instanceof CustomEvent) {
        switch (e.detail.id) {
          case 'level':
            this.state.level = `${e.detail.value}`;
            this.state.round = 0;
            this.changeBackGroundImage(this.state.level);
            break;
          case 'round':
            this.state.round = Number(e.detail.value);
            break;
        }
        this.config();
      }
    });
  }

  private config() {
    let pageData = this.data.getPage();
    if (pageData !== -1) {
      this.field.createMatrix(pageData);
    } else {
      this.state.round = 0;
      this.state.currentLine = 0;
      pageData = this.data.getPage();
      if (pageData !== -1) this.field.createMatrix(pageData);
    }
  }

  private changeBackGroundImage(level: string): void {
    const node = this.getNode().children[0];
    const img = bgImageList[level];
    if (node instanceof HTMLElement) {
      node.style.backgroundImage = `url(${img})`;
    }
  }
}
