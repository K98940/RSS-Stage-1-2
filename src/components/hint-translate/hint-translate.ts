import { Actions } from '../../types/types';
import { MyElement, MyElementProps } from '../app/Element/my-element';
import { State } from '../app/State/state';
import './hint-translate.css';

export class HintTranslate extends MyElement {
  hints: string[];

  state: State;

  constructor() {
    const prop: MyElementProps = {
      classNames: ['hint-translate'],
    };
    super(prop);

    this.hints = [];
    this.state = new State();
    document.addEventListener(Actions.showTranslate, this.showHint.bind(this));
    document.addEventListener(Actions.hideTranslate, this.hideHint.bind(this));
    document.addEventListener(Actions.setTranslate, this.setHint.bind(this));
  }

  public clearHints(): void {
    this.hints.length = 0;
  }

  public addHint(textHint: string): void {
    this.hints.push(textHint);
  }

  private getHintText(): string {
    return this.hints[this.state.level];
  }

  public setHint(): void {
    const text = this.getHintText();
    this.setTextContent(text);
  }

  public showHint(): void {
    this.getNode().classList.add('hint-translate_show');
  }

  public hideHint(): void {
    this.getNode().classList.remove('hint-translate_show');
  }
}
