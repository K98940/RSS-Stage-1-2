import './history-view.css';
import { Component } from '../../../component/component';
import { Color, l } from '../../../../../utils/utils';
import state, { subscribe } from '../../../../../state/state';
import { MessageUnitView } from './message-unit/message-unit';
import { ChatMessage } from '../../../../../types/types';

export class HistoryView extends Component {
  messages: MessageUnitView[] = [];

  constructor() {
    super({ classNames: ['history'] });
    subscribe('chat', () => this.render());
  }

  public render(): void {
    l('state', state, Color.blue);
    const user = state.currentUser;
    const chat = state.chat[user];

    chat?.forEach((message, i) => {
      if (this.messages[i] === undefined) {
        this.createNewMessageItem(message);
      } else {
        this.messages[i].update(message);
      }
    });

    if (this.messages?.length > chat?.length) this.deleteRedundantMessages(chat.length);
  }

  private createNewMessageItem(message: ChatMessage): void {
    const messageItem = new MessageUnitView(message);
    this.messages.push(messageItem);
    this.appendNodes(messageItem.node);
  }

  private deleteRedundantMessages(from: number): void {
    this.messages.splice(from, this.node.children.length);
    const count = this.node.children.length - from;
    for (let i = from; i < from + count; i += 1) {
      this.node.children[from]?.remove();
    }
  }
}
