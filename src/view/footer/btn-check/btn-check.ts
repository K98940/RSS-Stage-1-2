import { Actions, MyCustomEvent } from './../../../types/types';
import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';

export class BtnCheck extends MyElement {
  state: State;

  action: Actions;

  constructor() {
    super({
      tag: 'button',
      textContent: 'Check',
      classNames: ['footer__btn', 'visibility_hidden', 'btn-group-1'],
      callback: () => {
        document.dispatchEvent(new CustomEvent(this.action));
        this.removeClass('btn_active');
        this.removeClass('btn_check');
        this.setTextContent('Check');
      },
    });
    this.action = Actions.check;
    this.state = new State();
    this.state.subscribe(this);

    document.addEventListener(Actions.continue, () => {
      this.action = Actions.continue;
      this.removeClass('btn_active');
      this.removeClass('btn_check');
    });

    document.addEventListener(Actions.correctSequence, () => {
      this.action = Actions.continue;
      this.setClasses(['btn_active', 'btn_check']);
    });

    document.addEventListener(Actions.wrongSequence, () => {
      this.action = Actions.check;
      this.setClasses(['btn_active', 'btn_check']);
      this.setTextContent('Check');
    });

    document.addEventListener(Actions.lineNotComplete, () => {
      this.removeClass('btn_active');
      this.removeClass('btn_check');
      this.setTextContent('Check');
    });

    document.addEventListener(
      Actions.correctSequence,
      (e: CustomEventInit<MyCustomEvent>) => {
        this.action = Actions.continue;
        if (e.detail?.textButton) {
          this.setTextContent(e.detail?.textButton);
        }

        this.removeClass('btn_check');
        this.setClasses(['btn_active']);
      },
    );
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
