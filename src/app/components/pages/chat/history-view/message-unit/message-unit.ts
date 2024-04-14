import './message-unit.css';
import { ChatMessage, Dispatch } from '../../../../../../types/types';
import { Component } from '../../../../component/component';
import state from '../../../../../../state/state';
import { ButtonDelete } from './button-delete/button-delete';

export class MessageUnitView {
  private message;

  private text;

  private from;

  private datetime;

  private btnDelete;

  private footer;

  private isDelivered;

  public node;

  private dispatch;

  constructor(msg: ChatMessage, dispatch: Dispatch) {
    this.dispatch = dispatch;
    this.node = new Component({});
    this.footer = new Component({});
    this.isDelivered = new Component({});
    this.btnDelete = new Component({});
    this.datetime = new Component({});
    this.from = new Component({});
    this.text = new Component({});
    this.message = msg;
    this.update(msg);
  }

  public update(msg: ChatMessage) {
    this.message = msg;
    this.node = new Component({ tag: 'section', classNames: ['message-item'] });
    const header = new Component({ tag: 'header', classNames: ['message-item__header'] });
    this.from = new Component({ tag: 'span', textContent: `${this.message.from}:`, classNames: ['header__from'] });
    const time = new Date(this.message.datetime).toLocaleString();
    this.datetime = new Component({ tag: 'span', textContent: `${time || ''}`, classNames: ['header__datetime'] });
    header.appendNodes(this.from, this.datetime);

    const contentContainer = new Component({ classNames: ['content__container'] });
    this.text = new Component({
      tag: 'p',
      textContent: this.message.text,
      classNames: ['message-item__content'],
    });
    contentContainer.appendNodes(this.text);

    this.footer = new Component({ tag: 'footer', classNames: ['message-item__footer'] });
    const statuses = new Component({ classNames: ['footer__statuses'] });
    const deliveredMsg = this.message.status.isDelivered ? 'delivered' : 'not delivered';
    this.isDelivered = new Component({ tag: 'span', textContent: `${deliveredMsg}` });
    statuses.appendNodes(this.isDelivered);

    if (this.message.from === state.user.login) {
      this.node.setClasses(['message-item_owner']);
      this.from.setTextContent('You:');
      this.btnDelete = new ButtonDelete(this.message.id, this.dispatch);
      this.footer.appendNodes(this.btnDelete);
    }
    this.footer.appendNodes(statuses);
    this.node.appendNodes(header, contentContainer, this.footer);
  }
}
