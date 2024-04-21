import './message-unit.css';
import state from '../../../../../../state/state';
import { ButtonEdit } from './button-edit/button-edit';
import { Component } from '../../../../component/component';
import { ButtonDelete } from './button-delete/button-delete';
import { ChatMessage, Dispatch } from '../../../../../../types/types';

export class MessageUnitView {
  private message;

  private text;

  private from;

  private datetime;

  private footer;

  private isDelivered;

  private isReaded;

  public node;

  private dispatch;

  constructor(msg: ChatMessage, dispatch: Dispatch, isReaded?: boolean) {
    this.dispatch = dispatch;
    this.node = new Component({});
    this.footer = new Component({});
    this.isDelivered = new Component({});
    this.isReaded = isReaded;
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
    const time = new Date(this.message.datetime).toLocaleString('en-US', { hourCycle: 'h24' }).toLowerCase();
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
    const statuses = new Component({ classNames: ['footer__status'] });

    if (this.message.from === state.user.login) {
      if (this.message.status.isDelivered) {
        statuses.setClasses(['status_delivered']);
      } else {
        statuses.setClasses(['status_not-delivered']);
      }
      if (this.message.status.isReaded) statuses.setClasses(['status_read']);

      this.node.setClasses(['message-item_owner']);
      this.from.setTextContent('you:');
      const btnDelete = new ButtonDelete(this.message.id, this.dispatch);
      const btnEdit = new ButtonEdit(this.message.id, this.message.text, this.dispatch);
      const btnContainer = new Component({ classNames: ['btn-container'] });
      btnContainer.appendNodes(btnDelete, btnEdit);
      this.footer.appendNodes(btnContainer);
    }
    statuses.appendNodes(this.isDelivered);
    this.footer.appendNodes(statuses);
    this.node.appendNodes(header, contentContainer, this.footer);
  }
}
