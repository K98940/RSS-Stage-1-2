import { StateObect, TranslateMode } from './../../../types/types';
import { MyElement } from '../Element/my-element';

export const initialState: StateObect = {
  firstName: null,
  surname: null,
  _round: 2,
  _level: 'level1',
  _currentLine: 0,
  _hintTranslateMode: 'after',
};

export class State {
  static instance: State | undefined;

  private state: StateObect;

  private subscribers: MyElement[] | undefined;

  private subscribersLevel: MyElement[] | undefined;

  constructor() {
    if (State.instance) {
      this.state = State.instance.getState();
      return State.instance;
    }
    this.state = initialState;
    this.subscribers = [];
    this.subscribersLevel = [];
    State.instance = this;
  }

  public getState(): StateObect {
    return this.state;
  }

  public setState(newState: StateObect | object) {
    this.state = { ...this.getState(), ...newState };
    this.message(this.subscribers);
  }

  public subscribe(component: MyElement) {
    if (this.subscribers) this.subscribers.push(component);
  }

  public subscribeLevel(component: MyElement) {
    if (this.subscribersLevel) this.subscribersLevel.push(component);
  }

  public saveDOMElemt(element: { [index: string]: HTMLElement }) {
    const state = this.getState();

    this.state = { ...state, ...{ DOM: { ...element } } };
  }

  get round(): number {
    return this.state._round || 0;
  }

  set round(round: number) {
    if (round < 0) {
      console.error('round < 0');
      return;
    }
    this.state._round = round;
    this.message(this.subscribersLevel);
  }

  get hintTranslateMode(): TranslateMode {
    return this.state._hintTranslateMode;
  }

  set hintTranslateMode(mode: TranslateMode) {
    this.state._hintTranslateMode = mode;
  }

  get level(): string {
    return this.state._level || 'level1';
  }

  set level(lvl: string) {
    this.state._level = lvl;
    this.message(this.subscribersLevel);
  }

  get currentLine(): number {
    return this.state._currentLine || 0;
  }

  set currentLine(line: number) {
    if (line < 0) {
      console.error('line < 0');
      return;
    }
    this.state._currentLine = line;
  }

  private message(subscribers: MyElement[] | undefined) {
    if (subscribers) {
      subscribers.forEach((subscriber) => {
        subscriber.updateValue();
      });
    }
  }
}
