import { AllAuthenticatedUsersResponse, AuthenticationResponse, GeneralResponse } from '../types/types-api';

export function isAuthResponse(data: unknown | AuthenticationResponse): data is AuthenticationResponse {
  return (data as AuthenticationResponse).type !== undefined;
}

export function isGeneralResponse(data: unknown | GeneralResponse): data is GeneralResponse {
  return (data as GeneralResponse).type !== undefined;
}

export function isUsersResponse(data: unknown | AllAuthenticatedUsersResponse): data is AllAuthenticatedUsersResponse {
  return Array.isArray((data as AllAuthenticatedUsersResponse).payload.users);
}
