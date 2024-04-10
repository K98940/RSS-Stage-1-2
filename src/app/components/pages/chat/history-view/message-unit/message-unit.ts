import './message-unit.css';
import { ChatMessage } from '../../../../../../types/types';
import { Component } from '../../../../component/component';
import state from '../../../../../../state/state';

export class MessageUnitView {
  private message: ChatMessage;

  private text;

  private from;

  private datetime;

  private isDelivered;

  public node;

  constructor(msg: ChatMessage) {
    this.message = msg;
    this.node = new Component({ tag: 'section', classNames: ['message-item'] });

    const header = new Component({ tag: 'header', classNames: ['message-item__header'] });
    this.from = new Component({ tag: 'span', textContent: `${this.message.from}:`, classNames: ['header__from'] });
    const time = new Date(this.message.datetime).toLocaleString();
    this.datetime = new Component({ tag: 'span', textContent: `${time || ''}`, classNames: ['header__datetime'] });
    header.appendNodes(this.from, this.datetime);

    const contentContainer = new Component({ classNames: ['content__container'] });
    this.text = new Component({ tag: 'p', textContent: this.message.text, classNames: ['message-item__content'] });
    contentContainer.appendNodes(this.text);

    const footer = new Component({ tag: 'footer', classNames: ['message-item__footer'] });
    const statuses = new Component({ classNames: ['footer__statuses'] });
    const deliveredMsg = this.message.status.isDelivered ? 'delivered' : 'not delivered';
    this.isDelivered = new Component({ tag: 'span', textContent: `${deliveredMsg}` });
    statuses.appendNodes(this.isDelivered);
    footer.appendNodes(statuses);

    if (this.message.from === state.user.login) {
      this.node.setClasses(['message-item_owner']);
      this.from.setTextContent('You:');
    }

    this.node.appendNodes(header, contentContainer, footer);
  }

  public update(msg: ChatMessage) {
    if (this.message.from !== msg.from) {
      this.from.setTextContent(msg.from);
      this.message.from = msg.from;
    }
    if (this.message.datetime !== msg.datetime) {
      const time = new Date(msg.datetime).toLocaleString();
      this.datetime.setTextContent(`${time || ''}`);
      this.message.datetime = msg.datetime;
    }
    if (this.message.text !== msg.text) {
      this.text.setTextContent(msg.text);
      this.message.text = msg.text;
    }
    if (this.message.status.isDelivered !== msg.status.isDelivered) {
      const deliveredMsg = this.message.status.isDelivered ? 'delivered' : 'not delivered';
      this.isDelivered.setTextContent(deliveredMsg);
      this.message.status.isDelivered = msg.status.isDelivered;
    }
    if (this.message.from === state.user.login) {
      this.node.setClasses(['message-item_owner']);
      this.from.setTextContent('You:');
    } else {
      this.node.removeClass('message-item_owner');
    }
  }
}
