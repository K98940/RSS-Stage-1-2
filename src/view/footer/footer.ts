import './footer.css';
import {
  MyElement,
  MyElementProps,
} from '../../components/app/Element/my-element';
import Button from '../../components/app/tags/button/button';
import { State } from '../../components/app/State/state';

type MyEvent = {
  textButton?: string;
};

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
      classNames: ['footer__btn-continue', 'btn-continue_hidden'],
      callback: () => {
        document.dispatchEvent(new CustomEvent('continue'));
        this.btnContinue.removeClass('btn-continue_active');
        this.btnContinue.setTextContent('Continue');
      },
    });

    document.addEventListener('line', (e: CustomEventInit<MyEvent>) => {
      if (e.detail?.textButton) {
        this.btnContinue.setTextContent(e.detail?.textButton);
      }

      this.btnContinue.setClasses(['btn-continue_active']);
    });

    document.addEventListener('line-not-complete', () => {
      this.btnContinue.removeClass('btn-continue_active');
    });

    this.appendNodes(this.btnContinue);
  }

  public update(): void {
    const { process } = this.state.getState();
    switch (process) {
      case 'game':
        this.btnContinue.removeClass('btn-continue_hidden');
        break;
      default:
        break;
    }
  }
}
