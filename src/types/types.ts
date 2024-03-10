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

export type StateObect = {
  firstName: string | null;
  surname: string | null;
  process?: 'login' | 'start' | 'game';
  DOM?: {
    [index: string]: HTMLElement;
  };
};

export type Words = {
  audioExample: string;
  id: number;
  textExample: string;
  textExampleTranslate: string;
  word: string;
  wordTranslate: string;
};

export type PageCollection = {
  levelData: {
    author: string;
    cutSrc: string;
    id: string;
    imageSrc: string;
    name: string;
    year: string;
  };
  words: Words[];
};

export type Cell = {
  text: string;
  node: Html;
};

export type Matrix = {
  source: Cell[][];
  destination: Cell[][];
};
