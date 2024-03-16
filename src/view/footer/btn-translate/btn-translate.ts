import './btn-translate.css';
import { Actions } from '../../../types/types';
import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';

export class BtnShowTranslate extends MyElement {
  state: State;

  constructor() {
    super({
      tag: 'button',
      textContent: 'Translate',
      attributes: [['title', 'show the translate']],
      classNames: ['visibility_hidden', 'btn_show-translate', 'btn-group-1'],
    });
    this.setCallback(this.handleClick.bind(this), 'click');
    this.state = new State();
    this.state.subscribe(this);
  }

  public update(): void {
    const { process } = this.state.getState();
    switch (process) {
      case 'game':
        this.removeClass('visibility_hidden');
        break;
      default:
        break;
    }
  }

  private handleClick(): void {
    switch (this.state.hintTranslateMode) {
      case 'after':
        this.state.hintTranslateMode = 'before';
        this.getNode().classList.add('btn_show-always');
        document.dispatchEvent(new CustomEvent(Actions.showTranslate));
        break;
      case 'before':
        this.state.hintTranslateMode = 'after';
        this.getNode().classList.remove('btn_show-always');
        document.dispatchEvent(new CustomEvent(Actions.hideTranslate));
        break;
    }
  }
}
