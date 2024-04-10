import {
  AllAuthenticatedUsersResponse,
  AuthenticationResponse,
  GeneralResponse,
  MessageHistoryResponse,
  MessageResponse,
  NotificationMsgDelivery,
  Requests,
} from '../types/types-api';

export function isAuthResponse(data: unknown | AuthenticationResponse): data is AuthenticationResponse {
  return (data as AuthenticationResponse).type !== undefined;
}

export function isGeneralResponse(data: unknown | GeneralResponse): data is GeneralResponse {
  return (data as GeneralResponse).type !== undefined;
}

export function isUsersResponse(data: unknown | AllAuthenticatedUsersResponse): data is AllAuthenticatedUsersResponse {
  return Array.isArray((data as AllAuthenticatedUsersResponse).payload.users);
}

export function isMessagesResponse(data: unknown | MessageHistoryResponse): data is MessageHistoryResponse {
  return Array.isArray((data as MessageHistoryResponse).payload.messages);
}

export function isMessageResponse(data: unknown | MessageResponse): data is MessageResponse {
  return (data as MessageResponse)?.payload?.message?.status?.isDelivered !== undefined;
}

export function isMsgDelivery(data: unknown | NotificationMsgDelivery): data is NotificationMsgDelivery {
  return (
    (data as NotificationMsgDelivery)?.type === Requests.MSG_DELIVER &&
    (data as NotificationMsgDelivery)?.payload.message.status.isDelivered !== undefined
  );
}
