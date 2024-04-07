import { Connect } from './connect';
import { Requests } from '../types/types-api';
import { AllAuthenticatedUsersRequest } from './../types/types-api';
import { Api } from './api';
import { isAuthResponse } from '../utils/predicates';

export class AuthUsers extends Api {
  connect = new Connect();

  constructor() {
    super();
    this.connect.subscribe(Requests.USER_ACTIVE, this.handleEvent);
    this.connect.subscribe(Requests.USER_INACTIVE, this.handleEvent);
  }

  public request(): void {
    const requestActiveUser: AllAuthenticatedUsersRequest = {
      id: '',
      type: Requests.USER_ACTIVE,
      payload: null,
    };
    this.connect.request(requestActiveUser);
    this.connect.request({ ...requestActiveUser, type: Requests.USER_INACTIVE });
  }

  public handleEvent = (data: unknown): void => {
    if (isAuthResponse(data)) {
      const type = data.type;
      this.subscribers[type]?.forEach((callback) => callback(data));
    }
  };
}
