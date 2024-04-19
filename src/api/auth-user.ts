import { Connect } from './connect';
import { Requests } from '../types/types-api';
import { AuthenticationRequest } from '../types/types-api';
import { Api } from './api';
import { isAuthResponse } from '../utils/predicates';

interface Request {
  login: string;
  password: string;
}

export class AuthUser extends Api {
  connect = Connect.getInstance();

  constructor() {
    super();
    this.connect.subscribe(Requests.USER_LOGIN, (data) => this.handleEvent(data));
    this.connect.subscribe(Requests.USER_LOGOUT, (data) => this.handleEvent(data));
    this.connect.subscribe(Requests.USER_EXTERNAL_LOGIN, (data) => this.handleEvent(data));
    this.connect.subscribe(Requests.USER_EXTERNAL_LOGOUT, (data) => this.handleEvent(data));
  }

  public request(request: Request) {
    const authRequest: AuthenticationRequest = {
      id: '',
      type: Requests.USER_LOGIN,
      payload: {
        user: {
          login: request.login,
          password: request.password,
        },
      },
    };

    this.connect.request(authRequest);
  }

  public handleEvent(data: unknown) {
    if (isAuthResponse(data)) {
      const type = data.type;
      this.subscribers[type]?.forEach((callback) => callback(data));
    }
  }
}
