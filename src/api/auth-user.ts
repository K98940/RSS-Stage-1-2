import { Connect } from './connect';
import { Color, l } from '../utils/utils';
import { Requests } from '../types/types-api';
import { AuthenticationRequest } from '../types/types-api';

export class AuthUser {
  connect = new Connect();

  constructor() {
    this.connect.subscribe(Requests.USER_LOGIN, this.handleEvent);
    this.connect.subscribe(Requests.USER_LOGOUT, this.handleEvent);
    this.connect.subscribe(Requests.USER_EXTERNAL_LOGIN, this.handleEvent);
    this.connect.subscribe(Requests.USER_EXTERNAL_LOGOUT, this.handleEvent);
  }

  public request(request: AuthenticationRequest) {
    this.connect.request(request);
  }

  public handleEvent(data: unknown) {
    l('получен auth ответ', data, Color.blue);
  }
}
