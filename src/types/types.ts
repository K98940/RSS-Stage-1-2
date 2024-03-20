export enum View {
  garage = 'garage',
  winners = 'winners',
}

export type Vewis = {
  [index in View]: HTMLParagraphElement;
};

export type Callback = {
  (e: Event | DragEvent): void;
};

export type HTMLAttributes = [string, string];
export type Html = HTMLTemplateElement | HTMLElement;
