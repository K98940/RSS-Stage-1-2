import { BaseComponent } from '../base/base-component';
import './message.css';

export class Message extends BaseComponent {
  private h1 = new BaseComponent({ tag: 'h1', classNames: ['message__h1'] });

  private content = new BaseComponent({ tag: 'p', classNames: ['message__content'] });

  constructor() {
    super({ classNames: ['message'] });
    this.appendNodes(this.h1, this.content);
  }

  public show(title: string, text: string, seconds: number): void {
    if (seconds > 120) seconds = 5;
    this.h1.setTextContent(title);
    this.content.setTextContent(text);
    document.body.append(this.node);
    setTimeout(() => {
      this.setClasses(['message_out']);
    }, seconds * 1000);
    setTimeout(
      () => {
        this.removeClass('message_out');
        this.node.remove();
      },
      seconds * 1000 + 1000,
    );
  }
}
