export enum View {
  garage = 'garage',
  winners = 'winners',
}

export type Vewis = {
  [index in View]: HTMLParagraphElement;
};

export type Callback<T> = {
  (e?: T): void;
};

export type HTMLAttributes = [string, string];
export type Html = HTMLTemplateElement | HTMLElement;

export type APICar = {
  name: string;
  color: string;
  id: number;
  error?: string;
};

export type TCar = {
  name: string;
  color: string;
  id: number;
};

export type MyResponse = {
  velocity: number;
  distance: number;
};
