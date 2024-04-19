import './history-view.css';
import { Color, l } from '../../../../../utils/utils';
import { Component } from '../../../component/component';
import state, { subscribe } from '../../../../../state/state';
import { MessageUnitView } from './message-unit/message-unit';
import { ChatMessage, Dispatch } from '../../../../../types/types';

export class HistoryView extends Component {
  messages: MessageUnitView[] = [];

  dispath;

  constructor(dispatch: Dispatch) {
    super({ classNames: ['history'] });
    this.dispath = dispatch;
    subscribe('chat', () => this.render());
  }

  public render(): void {
    l('state', state, Color.blue);
    const user = state.currentUser;
    const chat = state.chat[user];
    this.node.innerHTML = '';
    this.children = [];
    chat?.forEach((message) => this.createNewMessageItem(message));
  }

  private createNewMessageItem(message: ChatMessage): void {
    const messageItem = new MessageUnitView(message, this.dispath);
    this.messages.push(messageItem);
    this.appendNodes(messageItem.node);
    messageItem.node.getNode().scrollIntoView();
  }
}
