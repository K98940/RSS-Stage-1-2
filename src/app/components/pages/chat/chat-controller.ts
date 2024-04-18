import {
  isMessageResponse,
  isMessagesResponse,
  isMsgDelete,
  isMsgDelivery,
  isMsgEdited,
} from '../../../../utils/predicates';
import { Message } from '../../../../api/message';
import { Messages } from '../../../../api/messages';
import { Requests } from '../../../../types/types-api';
import { MessageEdit } from './message-edit/message-edit';
import state, { subscribe } from '../../../../state/state';
import { Notifications } from '../../../../api/notifications';
import { Actions, Btn, EditReturn } from '../../../../types/types';

export class ChatController {
  message;

  messages;

  notification;

  constructor() {
    this.messages = new Messages();
    this.message = new Message();
    this.notification = new Notifications();
    this.messages.subscribe(Requests.MSG_FROM_USER, (data) => this.handleRecieveMessages(data));
    this.message.subscribe(Requests.MSG_EDIT, (data) => this.handleMSG_EDIT(data));
    this.message.subscribe(Requests.MSG_SEND, (data) => this.handleRecieveMessages(data));
    this.message.subscribe(Requests.MSG_DELETE, (data) => this.handleMSG_DELETE(data));
    this.notification.subscribe(Requests.MSG_DELIVER, (data) => this.handleMSG_DELIVER(data));
    subscribe('currentInput', () => {
      if (!state.currentInput) return;
      this.message.send(state.currentInput, state.currentUser);
    });
  }

  public dispatch = (action: Actions) => {
    const { type, payload } = action;
    switch (type) {
      case 'message-delete':
        if (payload?.id) this.message.delete(payload.id);
        break;
      case 'message-edit':
        if (payload?.id && payload?.text) {
          const { id, text } = payload;
          new MessageEdit().openDialog(id, text).then(this.editRequest);
        }
        break;
      case 'select-user':
        if (payload?.login) this.selectUser(payload?.login);
        break;
    }
  };

  private selectUser = (login: string | undefined): void => {
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

  private handleMSG_EDIT(data: unknown) {
    if (isMsgEdited(data)) {
      const { users, newChat } = this.getChat();
      users.forEach((user) =>
        newChat[user].forEach((message) => {
          if (message.id === data.payload.message.id) message.text = data.payload.message.text;
        }),
      );
      state.chat = { ...state.chat, ...newChat };
    }
  }

  private handleMSG_DELETE(data: unknown): void {
    if (isMsgDelete(data)) {
      const id = data.payload.message.id;
      const user = state.currentUser;
      const newChat = this.getChat().newChat;
      state.chat[user] = newChat[user].filter((msg) => msg.id !== id);
      state.chat = { ...state.chat };
    }
  }

  private getChat() {
    const users = Object.keys(state.chat);
    const newChat = { ...state.chat };
    return { users, newChat };
  }

  private editRequest = (dialog: EditReturn): void => {
    const { id, text, button } = dialog;
    if (button === Btn.OK) this.message.editRequest(id, text);
  };
}
