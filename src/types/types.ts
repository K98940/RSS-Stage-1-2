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
