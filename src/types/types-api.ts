export interface GeneralRequest {
  id: string | null;
  type: string;
  payload: unknown;
}

export interface AuthenticationRequest {
  id: string;
  type: 'USER_LOGIN';
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
}

export interface AuthenticationResponse {
  id: string;
  type: 'USER_LOGIN';
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface LogoutRequest {
  id: string;
  type: 'USER_LOGOUT';
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
}

export interface LogoutResponse {
  id: string;
  type: 'USER_LOGOUT';
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface ThirdPartyUserAuthentication {
  id: null;
  type: 'USER_EXTERNAL_LOGIN';
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface ThirdPartyUserLogout {
  id: null;
  type: 'USER_EXTERNAL_LOGOUT';
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface AllAuthenticatedUsersRequest {
  id: string;
  type: 'USER_ACTIVE';
  payload: null;
}

export interface AllAuthenticatedUsersResponse {
  id: string;
  type: 'USER_ACTIVE';
  payload: {
    users: [];
  };
}

export interface AllUnauthorizedUsersRequest {
  id: string;
  type: 'USER_INACTIVE';
  payload: null;
}

export interface AllUnauthorizedUsersResponse {
  id: string;
  type: 'USER_INACTIVE';
  payload: {
    users: [];
  };
}

export interface MessageSendingRequest {
  id: string;
  type: 'MSG_SEND';
  payload: {
    message: {
      to: string;
      text: string;
    };
  };
}

export interface MessageSendingResponse {
  id: string;
  type: 'MSG_SEND';
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

export interface MessageReceivingRequest {
  id: null;
  type: 'MSG_SEND';
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
  type: 'MSG_FROM_USER';
  payload: {
    user: {
      login: string;
    };
  };
}

export interface MessageHistoryResponse {
  id: string;
  type: 'MSG_FROM_USER';
  payload: {
    messages: [];
  };
}

export interface NotificationMsgDeliveryStatusChange {
  id: null;
  type: 'MSG_DELIVER';
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
  type: 'MSG_READ';
  payload: {
    message: {
      id: string;
    };
  };
}

export interface MessageReadStatusChange {
  id: string;
  type: 'MSG_READ';
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
  type: 'MSG_READ';
  payload: {
    message: {
      id: string;
      status: {
        isReaded: boolean;
      };
    };
  };
}

export interface MessageDeletion {
  id: string;
  type: 'MSG_DELETE';
  payload: {
    message: {
      id: string;
    };
  };
}

export interface NotificationMessageDeletion {
  id: string;
  type: 'MSG_DELETE';
  payload: {
    message: {
      id: string;
      status: {
        isDeleted: boolean;
      };
    };
  };
}

export interface MessageTextEditingRequest {
  id: string;
  type: 'MSG_EDIT';
  payload: {
    message: {
      id: string;
      text: string;
    };
  };
}

export interface MessageTextEditingResponse {
  id: string;
  type: 'MSG_EDIT';
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
  type: 'ERROR';
  payload: {
    error: string;
  };
}
