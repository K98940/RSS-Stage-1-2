export type Callback<T> = {
  (e?: T): void;
};
export type HTMLAttributes = [string, string];
export type HTML = HTMLTemplateElement | HTMLElement;
export type Pages = 'login' | 'chat';
export interface Validation {
  readonly subject: string;
  validate: boolean;
  errors: string[];
}
export type ChatMessage = {
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
export type Actions = {
  type: 'message-delete' | 'message-edit' | 'message-send' | 'message-read' | 'select-user';
  payload?: {
    id?: string;
    text?: string;
    login?: string;
  };
};
export type Dispatch = {
  (action: Actions): void;
};
export enum Btn {
  OK = 'OK',
  CANCEL = 'CANCEL',
}
export type EditReturn = {
  id: string;
  text: string;
  button: string;
};
