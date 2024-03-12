import './footer.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';
import Button from '../../components/app/tags/button/button';
import { State } from '../../components/app/State/state';
import { BtnCheck } from './btn-check/btn-check';
import { MyCustomEvent } from '../../types/types';

export default class Footer extends MyElement {
  private state;

  private btnContinue;

  constructor() {
    const prop: MyElementProps = {
      tag: 'footer',
      classNames: ['footer'],
    };
    super(prop);

    this.state = new State();
    this.state.subscribe(this);

    this.btnContinue = new Button({
      text: 'Continue',
      classNames: ['footer__btn', 'visibility_hidden'],
      callback: () => {
        document.dispatchEvent(new CustomEvent('continue'));
        this.btnContinue.removeClass('btn_active');
        this.btnContinue.setTextContent('Continue');
      },
    });

    document.addEventListener(
      'correct-sequence',
      (e: CustomEventInit<MyCustomEvent>) => {
        if (e.detail?.textButton) {
          this.btnContinue.setTextContent(e.detail?.textButton);
        }

        this.btnContinue.setClasses(['btn_active']);
      },
    );

    document.addEventListener('line-not-complete', () => {
      this.btnContinue.removeClass('btn_active');
    });

    this.appendNodes(this.btnContinue, new BtnCheck());
  }

  public update(): void {
    const { process } = this.state.getState();
    switch (process) {
      case 'game':
        this.btnContinue.removeClass('visibility_hidden');
        break;
      default:
        break;
    }
  }
}
