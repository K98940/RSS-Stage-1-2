import './dialog.css';
import { MyElement } from '../../components/app/Element/my-element';

export class Dialog extends MyElement {
  constructor(text: string) {
    super({
      tag: 'dialog',
      classNames: ['dialog'],
    });
    this.config(text);
  }

  private config(text: string) {
    const container = new MyElement({ classNames: ['dialog__container'] });
    const p = new MyElement({
      tag: 'p',
      textContent: text,
      classNames: ['dialog__text'],
    });

    container.appendNodes(p);
    this.appendNodes(container);
  }
}
