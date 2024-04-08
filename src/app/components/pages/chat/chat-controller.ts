import { Message } from '../../../../api/message';
import { Messages } from '../../../../api/messages';
import { Requests } from '../../../../types/types-api';
import state, { subscribe } from '../../../../state/state';
import { isMessageResponse, isMessagesResponse } from '../../../../utils/predicates';

export class ChatController {
  message;

  messages;

  constructor() {
    this.messages = new Messages();
    this.message = new Message();
    this.messages.subscribe(Requests.MSG_FROM_USER, (data) => this.obtainNewMessages(data));
    this.message.subscribe(Requests.MSG_SEND, (data) => this.obtainNewMessages(data));
    subscribe('currentInput', () => this.handleSendMessage());
  }

  public handleChangeCurrentUser = (login: string | undefined): void => {
    if (login) {
      state.currentUser = login;
      this.messages.request(login);
    }
  };

  private obtainNewMessages(data: unknown): void {
    if (isMessagesResponse(data)) {
      const newChat = {
        [state.currentUser]: data.payload.messages,
      };
      state.chat = { ...state.chat, ...newChat };
    }
    if (isMessageResponse(data)) {
      const newChat = {
        [state.currentUser]: [...state.chat[state.currentUser], data.payload.message],
      };
      state.chat = { ...state.chat, ...newChat };
    }
  }

  public handleSendMessage(): void {
    this.message.request(state.currentInput, state.currentUser);
  }
}
