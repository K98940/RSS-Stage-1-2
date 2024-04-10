import { Message } from '../../../../api/message';
import { Messages } from '../../../../api/messages';
import { Requests } from '../../../../types/types-api';
import state, { subscribe } from '../../../../state/state';
import { Notifications } from '../../../../api/notifications';
import { isMessageResponse, isMessagesResponse, isMsgDelivery } from '../../../../utils/predicates';

export class ChatController {
  message;

  messages;

  notification;

  constructor() {
    this.messages = new Messages();
    this.message = new Message();
    this.notification = new Notifications();
    this.messages.subscribe(Requests.MSG_FROM_USER, (data) => this.handleRecieveMessages(data));
    this.message.subscribe(Requests.MSG_SEND, (data) => this.handleRecieveMessages(data));
    this.notification.subscribe(Requests.MSG_DELIVER, (data) => this.handleMSG_DELIVER(data));
    subscribe('currentInput', () => this.handleSendMessage());
  }

  public handleChangeCurrentUser = (login: string | undefined): void => {
    if (login) {
      state.currentUser = login;
      this.messages.request(login);
    }
  };

  private handleRecieveMessages(data: unknown): void {
    if (isMessagesResponse(data)) {
      const newChat = {
        [state.currentUser]: data.payload.messages,
      };
      state.chat = { ...state.chat, ...newChat };
    }
    if (isMessageResponse(data)) {
      const { users, newChat } = this.getChat();
      users.forEach((user) => {
        if (user === data.payload.message.from || user === data.payload.message.to) {
          const message = data.payload.message;
          newChat[user] = [...newChat[user], message];
        }
      });
      state.chat = { ...state.chat, ...newChat };
    }
  }

  public handleSendMessage(): void {
    this.message.request(state.currentInput, state.currentUser);
  }

  private handleMSG_DELIVER(data: unknown) {
    if (isMsgDelivery(data)) {
      const { users, newChat } = this.getChat();
      users.forEach((user) =>
        newChat[user].forEach((message) => {
          if (message.id === data.payload.message.id)
            message.status = { ...message.status, ...data.payload.message.status };
        }),
      );
      state.chat = { ...state.chat, ...newChat };
    }
  }

  private getChat() {
    const users = Object.keys(state.chat);
    const newChat = { ...state.chat };
    return { users, newChat };
  }
}
