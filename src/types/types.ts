export type Callback = {
  (e: Event | DragEvent): void;
};

export type HTMLAttributes = [string, string];
export type Html = HTMLTemplateElement | HTMLElement;

export type InputProps = {
  id?: string;
  labelText?: string;
  attributes?: HTMLAttributes[];
  callback?: Callback;
};

export type TranslateMode = 'before' | 'after';

export type StateObect = {
  firstName: string | null;
  surname: string | null;
  _round?: number;
  _level?: string;
  _currentLine?: number;
  _hintTranslateMode: TranslateMode;
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
  id: number;
  text: string;
  node: Html;
  x?: number;
  y?: number;
  xOffset?: number;
  yOffset?: number;
};

export type Matrix = {
  source: Cell[][];
  destination: Cell[][];
};

export type MyCustomEvent = {
  textButton?: string;
};

export enum Actions {
  check = 'check',
  continue = 'continue',
  newLevel = 'new-level',
  lineNotComplete = 'line-not-complete',
  correctSequence = 'correct-sequence',
  wrongSequence = 'wrong-sequence',
  autoComplete = 'auto-complete',
  lineComplete = 'line-complete',
  showTranslate = 'show-translate',
  hideTranslate = 'hide-translate',
  setTranslate = 'set-translate',
  playHint = 'play-hint',
  setAudioHints = 'set-audio-hints',
  changeLevel = 'change-level',
}

export enum Place {
  destination = 'destination',
  source = 'source',
}
