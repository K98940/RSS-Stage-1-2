export enum Requests {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
  USER_EXTERNAL_LOGIN = 'USER_EXTERNAL_LOGIN',
  USER_EXTERNAL_LOGOUT = 'USER_EXTERNAL_LOGOUT',
  USER_ACTIVE = 'USER_ACTIVE',
  USER_INACTIVE = 'USER_INACTIVE',
  MSG_SEND = 'MSG_SEND',
  MSG_FROM_USER = 'MSG_FROM_USER',
  MSG_DELIVER = 'MSG_DELIVER',
  MSG_READ = 'MSG_READ',
  MSG_DELETE = 'MSG_DELETE',
  MSG_EDIT = 'MSG_EDIT',
  ERROR = 'ERROR',
}

export interface GeneralRequest {
  id: string | null;
  type: string;
  payload: unknown;
}

export interface GeneralResponse {
  id: string;
  type: Requests;
  payload: {
    error: string;
  };
}

export type AuthTypes =
  | Requests.USER_LOGIN
  | Requests.USER_EXTERNAL_LOGIN
  | Requests.USER_LOGOUT
  | Requests.USER_EXTERNAL_LOGOUT;
export interface AuthenticationRequest {
  id: string;
  type: AuthTypes;
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
}
export interface AuthenticationResponse {
  id: string;
  type: AuthTypes;
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export type UsersTypes = Requests.USER_ACTIVE | Requests.USER_INACTIVE;
export interface AllAuthenticatedUsersRequest {
  id: string;
  type: UsersTypes;
  payload: null;
}
export interface AllAuthenticatedUsersResponse {
  id: string;
  type: UsersTypes;
  payload: {
    users: [];
  };
}

export interface MessageRequest {
  id: string;
  type: Requests.MSG_SEND;
  payload: {
    message: {
      to: string;
      text: string;
    };
  };
}
export interface MessageResponse {
  id: string;
  type: Requests.MSG_SEND;
  payload: {
    message: {
      id: string;
      from: string;
      to: string;
      text: string;
      datetime: number;
      status: {
        isDelivered: boolean;
        isReaded: boolean;
        isEdited: boolean;
      };
    };
  };
}

export interface MessageHistoryRequest {
  id: string;
  type: Requests.MSG_FROM_USER;
  payload: {
    user: {
      login: string;
    };
  };
}
export interface MessageHistoryResponse {
  id: string;
  type: Requests.MSG_FROM_USER;
  payload: {
    messages: [];
  };
}

export interface NotificationMsgDeliveryStatusChange {
  id: null;
  type: Requests.MSG_DELIVER;
  payload: {
    message: {
      id: string;
      status: {
        isDelivered: boolean;
      };
    };
  };
}
export interface MessageReadStatusChangeRequest {
  id: string;
  type: Requests.MSG_READ;
  payload: {
    message: {
      id: string;
    };
  };
}
export interface MessageReadStatusChange {
  id: string;
  type: Requests.MSG_READ;
  payload: {
    message: {
      id: string;
      status: {
        isReaded: boolean;
      };
    };
  };
}
export interface NotificationMessageReadStatusChange {
  id: null;
  type: Requests.MSG_READ;
  payload: {
    message: {
      id: string;
      status: {
        isReaded: boolean;
      };
    };
  };
}
export interface NotificationMessageDeletion {
  id: string;
  type: Requests.MSG_DELETE;
  payload: {
    message: {
      id: string;
      status: {
        isDeleted: boolean;
      };
    };
  };
}

export interface MessageDeletion {
  id: string;
  type: Requests.MSG_DELETE;
  payload: {
    message: {
      id: string;
    };
  };
}

export interface MessageTextEditingRequest {
  id: string;
  type: Requests.MSG_EDIT;
  payload: {
    message: {
      id: string;
      text: string;
    };
  };
}

export interface MessageTextEditingResponse {
  id: string;
  type: Requests.MSG_EDIT;
  payload: {
    message: {
      id: string;
      text: string;
      status: {
        isEdited: boolean;
      };
    };
  };
}

export interface ServerResponsesError {
  id: string;
  type: Requests.ERROR;
  payload: {
    error: string;
  };
}
