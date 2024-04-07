import { Connect } from './connect';
import { Requests } from '../types/types-api';
import { MessageHistoryRequest } from '../types/types-api';
import { isGeneralResponse } from '../utils/predicates';
import { ModalMessage } from '../app/components/component/modal-message/modal-message';

export class Notifications {
  connect = new Connect();

  modal = new ModalMessage();

  constructor() {
    this.connect.subscribe(Requests.MSG_DELIVER, this.handleEvent);
    this.connect.subscribe(Requests.MSG_READ, this.handleEvent);
    this.connect.subscribe(Requests.MSG_DELETE, this.handleEvent);
    this.connect.subscribe(Requests.ERROR, this.handleEvent);
    this.connect.subscribe(Requests.USER_LOGIN, this.handleEvent);
  }

  public request(request: MessageHistoryRequest) {
    this.connect.request(request);
  }

  public handleEvent = (data: unknown): void => {
    if (isGeneralResponse(data)) {
      const { type } = data;
      switch (type) {
        case 'ERROR':
          this.modal.show(data.payload.error);
          break;
      }
    }
  };
}
