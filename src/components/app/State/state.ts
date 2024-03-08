import { StateObect } from './../../../types/types';
import { MyElement } from '../Element/my-element';

const initialState: StateObect = {
  firstName: null,
  surname: null,
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

  public setState(newState: StateObect) {
    this.state = { ...this.getState(), ...newState };

    if (this.subscribers) {
      this.subscribers.forEach((subscriber) => {
        subscriber.update();
      });
    }
  }

  subscribe(component: MyElement) {
    if (this.subscribers) this.subscribers.push(component);
  }
}
