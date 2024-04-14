import { Api } from './api';
import { Connect } from './connect';
import { MessageDeletion, Requests } from '../types/types-api';
import { MessageRequest } from './../types/types-api';
import { isMessageResponse, isMsgDelete } from '../utils/predicates';

export class Message extends Api {
  connect = new Connect();

  constructor() {
    super();
    this.connect.subscribe(Requests.MSG_SEND, (data) => this.handleEvent(data));
    this.connect.subscribe(Requests.MSG_DELETE, (data) => this.handleEvent(data));
  }

  public send(text: string, to: string) {
    const request: MessageRequest = {
      id: '',
      type: Requests.MSG_SEND,
      payload: {
        message: { to, text },
      },
    };
    this.connect.request(request);
  }

  public delete(id: string) {
    const request: MessageDeletion = {
      id: '',
      type: Requests.MSG_DELETE,
      payload: {
        message: { id },
      },
    };
    this.connect.request(request);
  }

  public handleEvent(data: unknown) {
    if (isMessageResponse(data) || isMsgDelete(data)) {
      const type = data.type;
      this.subscribers[type]?.forEach((callback) => callback(data));
    }
  }
}
