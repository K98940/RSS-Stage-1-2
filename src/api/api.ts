import { Callback } from '../types/types';

type Subscribers = {
  [index: string]: Callback<unknown>[];
};

export class Api {
  protected subscribers: Subscribers = {};

  public subscribe(event: string, calback: Callback<unknown>): void {
    if (!this.subscribers.hasOwnProperty(event)) this.subscribers[event] = [];
    this.subscribers[event].push(calback);
  }

  protected eventEmmiter(event: string): void {
    this.subscribers[event]?.forEach((callback) => callback());
  }
}
