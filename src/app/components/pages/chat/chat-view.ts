import './chat.css';
import { HTML } from '../../../../types/types';
import { Component } from '../../component/component';
import { ChatController } from './chat-controller';
import { HistoryView } from './history-view/history-view';
import { Users } from './users-list/users-list-view';
import { InputMessage } from './message-input/message-input';

export class PageChat extends Component {
  users;

  history;

  inputSendMessage;

  controller;

  constructor() {
    super({ classNames: ['chat'] });
    const usersContainer = new Component({ classNames: ['users'] });
    const chatContainer = new Component({ classNames: ['chat-container'] });
    this.appendNodes(usersContainer);
    this.controller = new ChatController();
    this.users = new Users(usersContainer, this.controller.handleChangeCurrentUser);
    this.history = new HistoryView();
    this.inputSendMessage = new InputMessage();
    chatContainer.appendNodes(this.history, this.inputSendMessage);
    this.appendNodes(chatContainer);
  }

  public render(context: HTML): void {
    this.users.requestUsers();
    super.render(context);
  }
}
