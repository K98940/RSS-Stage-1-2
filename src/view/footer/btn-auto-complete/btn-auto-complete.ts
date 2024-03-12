import { Actions } from '../../../types/types';
import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';

export class BtnAutoComplete extends MyElement {
  state: State;

  constructor() {
    super({
      tag: 'button',
      textContent: 'Auto-Complete',
      attributes: [['title', 'I`m cave in']],
      classNames: ['footer__btn', 'visibility_hidden', 'btn_auto-complete'],
      callback: () => {
        document.dispatchEvent(new CustomEvent(Actions.autoComplete));
      },
    });
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
}
