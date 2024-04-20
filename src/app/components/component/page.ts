import { HTML } from '../../../types/types';
import { Component } from './component';

export class Page {
  protected static instance: Page;

  node: Component | undefined;

  public getInstance(): Page {
    if (!Page.instance) Page.instance = new Page();
    return Page.instance;
  }

  public render(context: HTML): void {
    console.log(context);
  }
}
