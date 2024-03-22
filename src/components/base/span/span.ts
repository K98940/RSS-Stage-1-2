import { BaseComponent } from '../base-component';

export class Span extends BaseComponent {
  constructor(text: string) {
    super({ tag: 'span', textContent: text });
  }
}
