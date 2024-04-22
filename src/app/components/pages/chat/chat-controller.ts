import {
  isMessageResponse,
  isMessagesResponse,
  isMsgDelete,
  isMsgDelivery,
  isMsgEdited,
  isMsgRead,
} from '../../../../utils/predicates';
import { session } from '../../Session/session';
import { Message } from '../../../../api/message';
import { Messages } from '../../../../api/messages';
import { AuthUser } from '../../../../api/auth-user';
import { Requests } from '../../../../types/types-api';
import { MessageEdit } from './message-edit/message-edit';
import state, { subscribe } from '../../../../state/state';
import { Notifications } from '../../../../api/notifications';
import { Actions, Btn, EditReturn } from '../../../../types/types';

export class ChatController {
  message;

  messages;

  notification;

  auth;

  constructor() {
    this.auth = new AuthUser();
    this.messages = new Messages();
    this.message = new Message();
    this.notification = new Notifications();
    this.messages.subscribe(Requests.MSG_FROM_USER, (data) => this.handleRecieveMessages(data));
    this.message.subscribe(Requests.MSG_EDIT, (data) => this.handleMSG_EDIT(data));
    this.message.subscribe(Requests.MSG_SEND, (data) => this.handleRecieveMessages(data));
    this.message.subscribe(Requests.MSG_DELETE, (data) => this.handleMSG_DELETE(data));
    this.notification.subscribe(Requests.MSG_DELIVER, (data) => this.handleMSG_DELIVER(data));
    this.notification.subscribe(Requests.MSG_READ, (data) => this.handleMSG_READ(data));
    subscribe('currentInput', () => {
      if (!state.currentInput) return;
      this.message.send(state.currentInput, state.currentUser);
    });
    subscribe('user', () => {
      if (state.user.isLogined) this.updateUserChat(state.currentUser);
    });
  }

  public dispatch = (action: Actions) => {
    const { type, payload } = action;
    switch (type) {
      case 'message-read':
        this.setMesagesRead();
        break;
      case 'message-delete':
        if (payload?.id) this.message.delete(payload.id);
        break;
      case 'message-edit':
        if (payload?.id && payload?.text) new MessageEdit().openDialog(payload.id, payload.text).then(this.editRequest);
        break;
      case 'select-user':
        if (payload?.login) this.updateUserChat(payload?.login);
        break;
      case 'logout':
        this.handleLogout();
        break;
      case 'about':
        state.lastNotification = Requests.USER_LOGIN;
        window.location.hash = 'about';
        break;
      case 'filter':
        state.filter = payload?.text || '';
        break;
    }
  };

  public updateUserChat = (login: string | undefined): void => {
    if (login) {
      state.currentUser = login;
      this.messages.request(login, login);
    }
  };

  private handleRecieveMessages(data: unknown): void {
    state.lastNotification = Requests.MSG_SEND;
    if (isMessagesResponse(data)) {
      const userName =
        data.payload.messages[0]?.from === state.user.login
          ? data.payload.messages[0]?.to
          : data.payload.messages[0]?.from;
      const chatName = data.id || userName;
      if (!chatName) return;

      const newChat = {
        [chatName]: data.payload.messages,
      };
      state.chat = { ...state.chat, ...newChat };
    }
    if (isMessageResponse(data)) {
      const { users, newChat } = this.getChat();
      users.forEach((userName) => {
        if (userName === data.payload.message.from || userName === data.payload.message.to) {
          const message = data.payload.message;
          newChat[userName] = [...newChat[userName], message];
        }
      });
      state.chat = { ...state.chat, ...newChat };
    }
  }

  private handleMSG_DELIVER(data: unknown) {
    if (isMsgDelivery(data)) {
      state.lastNotification = Requests.MSG_DELIVER;
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
      state.lastNotification = Requests.MSG_EDIT;
      const { users, newChat } = this.getChat();
      users.forEach((user) =>
        newChat[user].forEach((message) => {
          if (message.id === data.payload.message.id) {
            message.text = data.payload.message.text;
            message.status.isEdited = data.payload.message.status.isEdited;
          }
        }),
      );
      state.chat = { ...state.chat, ...newChat };
    }
  }

  private handleMSG_DELETE(data: unknown): void {
    if (isMsgDelete(data)) {
      state.lastNotification = Requests.MSG_DELETE;
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

  private handleLogout(): void {
    const { login, password } = state.user;
    state.user = { ...state, login: '', password: '', isRequested: false, isLogined: false };
    state.currentUser = '';
    state.currentPage = 'login';
    state.filter = '';
    state.chat = {};
    session.reset();
    this.auth.logout({ login, password });
    window.location.hash = 'login';
  }

  private setMesagesRead(): void {
    const user = state.currentUser;
    const unreadMessages = this.getChat().newChat[user].filter(
      (message) => message.to === state.user.login && !message.status.isReaded,
    );
    unreadMessages.forEach((msg) => this.message.setRead(msg.id));
  }

  private handleMSG_READ(data: unknown) {
    if (isMsgRead(data)) {
      state.lastNotification = Requests.MSG_READ;
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
}
