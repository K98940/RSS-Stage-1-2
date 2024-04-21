import './chat.css';
import { Header } from './header/header';
import { Page } from '../../component/page';
import { HTML } from '../../../../types/types';
import { ChatController } from './chat-controller';
import { Users } from './users-list/users-list-view';
import { Component } from '../../component/component';
import { HistoryView } from './history-view/history-view';
import { InputMessage } from './message-input/message-input';
import { Footer } from './footer/footer';

export class PageChat extends Page {
  private users;

  private history;

  private inputSendMessage;

  private controller;

  private constructor() {
    super();
    this.node = new Component({ classNames: ['chat'] });
    this.controller = new ChatController();
    const dispatch = this.controller.dispatch;

    const header = new Header(dispatch);
    const footer = new Footer();
    const usersContainer = new Component({ classNames: ['users', 'scroll-bar'] });
    const chatContainer = new Component({ classNames: ['chat-container'] });
    this.users = new Users(usersContainer, dispatch);
    this.history = new HistoryView(dispatch);
    this.inputSendMessage = new InputMessage();

    this.node.appendNodes(header, usersContainer);
    chatContainer.appendNodes(this.history, this.inputSendMessage);
    this.node.appendNodes(chatContainer, footer);
  }

  public static getInstance(): Page {
    if (!PageChat.instance) PageChat.instance = new PageChat();
    return PageChat.instance;
  }

  public render(context: HTML): void {
    this.users.requestUsers();
    this.node?.render(context);
  }
}
