import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';

export class BtnCheck extends MyElement {
  state: State;

  constructor() {
    super({
      tag: 'button',
      textContent: 'Check',
      classNames: ['footer__btn', 'visibility_hidden'],
      callback: () => {
        document.dispatchEvent(new CustomEvent('check'));
        this.removeClass('btn_active');
        this.removeClass('btn_check');
      },
    });
    this.state = new State();
    this.state.subscribe(this);

    document.addEventListener('continue', () => {
      this.removeClass('btn_active');
      this.removeClass('btn_check');
    });

    document.addEventListener('correct-sequence', () => {
      this.setClasses(['btn_active', 'btn_check']);
    });

    document.addEventListener('wrong-sequence', () => {
      this.setClasses(['btn_active', 'btn_check']);
    });

    document.addEventListener('line-not-complete', () => {
      this.removeClass('btn_active');
      this.removeClass('btn_check');
    });
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
