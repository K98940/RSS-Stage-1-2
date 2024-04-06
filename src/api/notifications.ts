import { Connect } from './connect';
import { Color, l } from '../utils/utils';
import { Requests } from '../types/types-api';
import { MessageHistoryRequest } from '../types/types-api';

export class Notifications {
  connect = new Connect();

  constructor() {
    this.connect.subscribe(Requests.MSG_DELIVER, this.handleEvent);
    this.connect.subscribe(Requests.MSG_READ, this.handleEvent);
    this.connect.subscribe(Requests.MSG_DELETE, this.handleEvent);
  }

  public request(request: MessageHistoryRequest) {
    this.connect.request(request);
  }

  public handleEvent(data: unknown) {
    l('получен notifications ответ', data, Color.blue);
  }
}
