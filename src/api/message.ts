import { Api } from './api';
import { Connect } from './connect';
import { MessageRequest } from './../types/types-api';
import { isMessageResponse, isMsgDelete, isMsgEdited } from '../utils/predicates';
import { MessageDeletion, MessageTextEditingRequest, Requests } from '../types/types-api';

export class Message extends Api {
  connect = new Connect();

  constructor() {
    super();
    this.connect.subscribe(Requests.MSG_SEND, (data) => this.handleEvent(data));
    this.connect.subscribe(Requests.MSG_DELETE, (data) => this.handleEvent(data));
    this.connect.subscribe(Requests.MSG_EDIT, (data) => this.handleEvent(data));
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

  public editRequest(id: string, text: string) {
    const request: MessageTextEditingRequest = {
      id: '',
      type: Requests.MSG_EDIT,
      payload: {
        message: { id, text },
      },
    };
    this.connect.request(request);
  }

  public handleEvent(data: unknown) {
    if (isMessageResponse(data) || isMsgDelete(data) || isMsgEdited(data)) {
      const type = data.type;
      this.subscribers[type]?.forEach((callback) => callback(data));
    }
  }
}
