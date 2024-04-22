import './history-view.css';
import { Component } from '../../../component/component';
import { Requests } from '../../../../../types/types-api';
import state, { subscribe } from '../../../../../state/state';
import { MessageUnitView } from './message-unit/message-unit';
import { ChatMessage, Dispatch } from '../../../../../types/types';

export class HistoryView extends Component {
  private messages: MessageUnitView[] = [];

  private divider: Component | null;

  private localState: ChatMessage[] | null;

  constructor(dispatch: Dispatch) {
    super({ classNames: ['history', 'scroll-bar'] });
    this.divider = null;
    this.localState = null;
    this.dispatch = dispatch;
    subscribe('chat', () => this.render());
  }

  private isStateChanged(chat: ChatMessage[]): boolean {
    const oldState = JSON.stringify(this.localState);
    const newState = JSON.stringify(chat);
    if (oldState !== newState) this.localState = JSON.parse(newState || '{}');
    return oldState !== newState;
  }

  public render(): void {
    const user = state.currentUser;
    const chat = state.chat[user];
    if (!this.isStateChanged(chat)) return;

    this.node.innerHTML = '';
    this.divider = null;
    this.children = [];

    this.node.removeEventListener('wheel', this.actionMessageRead);
    this.node.removeEventListener('click', this.actionMessageRead);
    chat?.forEach((message) => this.createNewMessageItem(message));
  }

  private createNewMessageItem(message: ChatMessage): void {
    if (!this.dispatch) throw new TypeError('HistoryView constructor needs dispatch');

    const messageItem = new MessageUnitView(message, this.dispatch, false);
    if (this.isFirstUnreadMessage(message)) {
      this.divider = new Component({ classNames: ['history__divider'] });
      const dividerLine = new Component({ classNames: ['history__divider-line'] });
      this.divider.appendNodes(dividerLine);
      this.appendNodes(this.divider);
    }

    this.messages.push(messageItem);
    this.appendNodes(messageItem.node);
    this.scrollTo(messageItem);
  }

  private scrollTo(item: MessageUnitView): void {
    if (
      state.lastNotification === Requests.MSG_DELETE ||
      state.lastNotification === Requests.MSG_READ ||
      state.lastNotification === Requests.MSG_EDIT
    )
      return;
    if (this.divider) {
      this.divider.getNode().scrollIntoView(true);
    } else {
      item.node.getNode().scrollIntoView();
    }
  }

  private actionMessageRead = (): void => {
    if (this.dispatch) this.dispatch({ type: 'message-read' });
  };

  private isFirstUnreadMessage(message: ChatMessage): boolean {
    if (!this.divider) {
      if (message.to === state.user.login && !message.status.isReaded) {
        setTimeout(() => {
          this.node.addEventListener('wheel', this.actionMessageRead, { once: true });
          this.node.addEventListener('click', this.actionMessageRead, { once: true });
        }, 50);
        return true;
      }
    }
    return false;
  }
}
