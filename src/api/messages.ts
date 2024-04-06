import { Connect } from './connect';
import { Color, l } from '../utils/utils';
import { Requests } from '../types/types-api';
import { MessageHistoryRequest } from '../types/types-api';

export class Messages {
  connect = new Connect();

  constructor() {
    this.connect.subscribe(Requests.MSG_FROM_USER, this.handleEvent);
  }

  public request(request: MessageHistoryRequest) {
    this.connect.request(request);
  }

  public handleEvent(data: unknown) {
    l('получен history messages ответ', data, Color.blue);
  }
}
