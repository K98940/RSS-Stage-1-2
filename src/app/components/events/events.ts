type Handler = {
  (...args: string[]): void;
};
type Handlers = {
  [index: string]: Handler[];
};

export class EventEmmiter {
  private handlers: Handlers = {};

  protected on(event: string, handler: Handler): void {
    if (!(event in this.handlers)) {
      this.handlers[event] = [];
    }
    this.handlers[event].push(handler);
  }

  protected event(eventName: string, ...arg: string[]): void {
    if (!(eventName in this.handlers)) return;
    this.handlers[eventName].forEach((handler) => handler(...arg));
  }
}
