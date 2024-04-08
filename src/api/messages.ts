import { Api } from './api';
import { Connect } from './connect';
import { Requests } from '../types/types-api';
import { MessageHistoryRequest } from '../types/types-api';
import { isMessagesResponse } from '../utils/predicates';

export class Messages extends Api {
  connect = new Connect();

  constructor() {
    super();
    this.connect.subscribe(Requests.MSG_FROM_USER, (data) => this.handleEvent(data));
  }

  public request(login: string) {
    const request: MessageHistoryRequest = {
      id: '',
      type: Requests.MSG_FROM_USER,
      payload: {
        user: {
          login: login,
        },
      },
    };
    this.connect.request(request);
  }

  public handleEvent(data: unknown) {
    if (isMessagesResponse(data)) {
      const type = data.type;
      this.subscribers[type]?.forEach((callback) => callback(data));
    }
  }
}
