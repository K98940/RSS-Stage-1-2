import { AuthenticationResponse } from '../types/types-api';

export function isAuthResponse(data: unknown | AuthenticationResponse): data is AuthenticationResponse {
  return (data as AuthenticationResponse).type !== undefined;
}
