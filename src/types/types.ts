export type Callback = {
  (e: Event): void;
};

export type HTMLAttributes = [string, string];
export type Html = HTMLTemplateElement | HTMLElement;

export type InputProps = {
  id?: string;
  labelText?: string;
  attributes?: HTMLAttributes[];
  callback?: Callback;
};
