import { Api } from './api';
import { Connect } from './connect';
import { Requests } from '../types/types-api';
import { MessageRequest } from './../types/types-api';
import { isMessageResponse } from '../utils/predicates';

export class Message extends Api {
  connect = new Connect();

  constructor() {
    super();
    this.connect.subscribe(Requests.MSG_SEND, (data) => this.handleEvent(data));
  }

  public request(text: string, to: string) {
    const request: MessageRequest = {
      id: '',
      type: Requests.MSG_SEND,
      payload: {
        message: { to, text },
      },
    };
    this.connect.request(request);
  }

  public handleEvent(data: unknown) {
    if (isMessageResponse(data)) {
      const type = data.type;
      this.subscribers[type]?.forEach((callback) => callback(data));
    }
  }
}
