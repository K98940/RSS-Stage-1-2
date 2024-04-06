import { Connect } from './connect';
import { Color, l } from '../utils/utils';
import { Requests } from '../types/types-api';
import { AllAuthenticatedUsersRequest } from './../types/types-api';

export class Users {
  connect = new Connect();

  constructor() {
    this.connect.subscribe(Requests.USER_ACTIVE, this.handleEvent);
    this.connect.subscribe(Requests.USER_INACTIVE, this.handleEvent);
  }

  public request(request: AllAuthenticatedUsersRequest) {
    this.connect.request(request);
  }

  public handleEvent(data: unknown) {
    l('получен users ответ', data, Color.blue);
  }
}
