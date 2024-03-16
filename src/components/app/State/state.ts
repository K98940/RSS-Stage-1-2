import { StateObect, TranslateMode } from './../../../types/types';
import { MyElement } from '../Element/my-element';

export const initialState: StateObect = {
  firstName: null,
  surname: null,
  _level: 0,
  _hintTranslateMode: 'after',
};

export class State {
  static instance: State | undefined;

  private state: StateObect;

  private subscribers: MyElement[] | undefined;

  constructor() {
    if (State.instance) {
      this.state = State.instance.getState();
      return State.instance;
    }

    this.state = initialState;
    this.subscribers = [];
    State.instance = this;
  }

  public getState(): StateObect {
    return this.state;
  }

  public setState(newState: StateObect | object) {
    this.state = { ...this.getState(), ...newState };

    if (this.subscribers) {
      this.subscribers.forEach((subscriber) => {
        subscriber.update();
      });
    }
  }

  public subscribe(component: MyElement) {
    if (this.subscribers) this.subscribers.push(component);
  }

  public saveDOMElemt(element: { [index: string]: HTMLElement }) {
    const state = this.getState();

    this.state = { ...state, ...{ DOM: { ...element } } };
  }

  get level(): number {
    return this.state._level;
  }

  set level(lvl: number) {
    if (lvl < 0) {
      console.error('level < 0');
      return;
    }
    this.state._level = lvl;
  }

  get hintTranslateMode(): TranslateMode {
    return this.state._hintTranslateMode;
  }

  set hintTranslateMode(mode: TranslateMode) {
    this.state._hintTranslateMode = mode;
  }
}
