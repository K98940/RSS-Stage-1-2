import './chat.css';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Page } from '../../component/page';
import { Input } from '../../component/input';
import { HTML } from '../../../../types/types';
import { ChatController } from './chat-controller';
import { Users } from './users-list/users-list-view';
import { Component } from '../../component/component';
import { HistoryView } from './history-view/history-view';
import { InputMessage } from './message-input/message-input';
import { UsersController } from './users-list/users-list-controller';

export class PageChat extends Page {
  private users;

  private history;

  private inputSendMessage;

  private chatController;

  private usersController;

  private constructor() {
    super();
    this.node = new Component({ classNames: ['chat'] });
    this.chatController = new ChatController();
    this.usersController = new UsersController();
    const dispatch = this.chatController.dispatch;

    const header = new Header(dispatch);
    const footer = new Footer();
    const usersContainer = new Component({ classNames: ['users', 'scroll-bar'] });
    const chatContainer = new Component({ classNames: ['chat-container'] });
    const filter = new Input({
      attributes: [['placeholder', 'filter...']],
      classNames: ['chat-filter'],
      callback: () => {
        dispatch({ type: 'filter', payload: { text: filter.value() } });
      },
    });
    this.users = new Users(usersContainer, dispatch);
    this.history = new HistoryView(dispatch);
    this.inputSendMessage = new InputMessage(dispatch);

    this.node.appendNodes(header, filter, usersContainer);
    chatContainer.appendNodes(this.history, this.inputSendMessage);
    this.node.appendNodes(chatContainer, footer);
  }

  public static getInstance(): Page {
    if (!PageChat.instance) PageChat.instance = new PageChat();
    return PageChat.instance;
  }

  public render(context: HTML): void {
    this.usersController.requestUsers();
    this.node?.render(context);
  }
}
