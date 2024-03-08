export class MyEventEmmiter {
  private listeners: MyEventEmmiter[];

  constructor() {
    // super();
    this.listeners = [];
  }

  public subscribe(observer: MyEventEmmiter): void {
    this.listeners.push(observer);
  }

  public unsubscribe(observer: MyEventEmmiter): void {
    this.listeners = this.listeners.filter((o) => o !== observer);
  }

  protected update() {}
}
