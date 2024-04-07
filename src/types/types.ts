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
