import { Connect } from './connect';
import { Color, l } from '../utils/utils';
import { Requests } from '../types/types-api';
import { MessageRequest } from './../types/types-api';

export class Message {
  connect = new Connect();

  constructor() {
    this.connect.subscribe(Requests.MSG_SEND, this.handleEvent);
  }

  public request(request: MessageRequest) {
    this.connect.request(request);
  }

  public handleEvent(data: unknown) {
    l('получен messages ответ', data, Color.blue);
  }
}
