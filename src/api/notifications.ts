import { Connect } from './connect';
import { Requests } from '../types/types-api';
import { isGeneralResponse } from '../utils/predicates';
import { ModalMessage } from '../app/components/component/modal-message/modal-message';
import { Api } from './api';

export class Notifications extends Api {
  connect = Connect.getInstance();

  modal = new ModalMessage();

  constructor() {
    super();
    this.connect.subscribe(Requests.MSG_DELIVER, (data) => this.handleEvent(data));
    this.connect.subscribe(Requests.MSG_READ, (data) => this.handleEvent(data));
    this.connect.subscribe(Requests.MSG_DELETE, (data) => this.handleEvent(data));
    this.connect.subscribe(Requests.ERROR, (data) => this.handlErrorMsg(data));
    this.connect.subscribe(Requests.USER_LOGIN, (data) => this.handleEvent(data));
  }

  public request() {}

  public handlErrorMsg = (data: unknown): void => {
    if (isGeneralResponse(data)) {
      const { type } = data;
      switch (type) {
        case 'ERROR':
          this.modal.show(data.payload.error);
          break;
      }
    }
  };

  public handleEvent = (data: unknown): void => {
    if (isGeneralResponse(data)) {
      const { type } = data;
      this.subscribers[type]?.forEach((callback) => callback(data));
    }
  };
}
