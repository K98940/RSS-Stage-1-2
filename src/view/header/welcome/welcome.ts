import { MyElement } from '../../../components/app/Element/my-element';
import { State } from '../../../components/app/State/state';
import './welcome.css';

export class Welcome extends MyElement {
  state;

  constructor() {
    super({ classNames: ['welcome'] });
    this.state = new State();
    this.config();
  }

  private config() {
    const { firstName, surname } = this.state.getState();
    const title = new MyElement({
      tag: 'h3',
      textContent: 'Welcome',
      classNames: ['welcome__title'],
    });
    const firstname = new MyElement({
      tag: 'p',
      textContent: firstName || '',
      classNames: ['welcome__content'],
    });
    const lastname = new MyElement({
      tag: 'p',
      textContent: surname || '',
      classNames: ['welcome__content'],
    });
    this.appendNodes(title.getNode(), firstname.getNode(), lastname.getNode());
  }
}
