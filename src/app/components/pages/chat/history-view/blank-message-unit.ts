import { Component } from '../../../component/component';

export class BlankMessageUnitView {
  public node;

  constructor(text: string) {
    this.node = new Component({ classNames: ['blank-message-container'] });
    const wrapper = new Component({ classNames: ['blank-message-wrapper', 'blank-message-container'] });
    const contentMessage = new Component({
      tag: 'p',
      textContent: text,
      classNames: ['blank-message-content'],
    });

    wrapper.appendNodes(contentMessage);
    this.node.appendNodes(wrapper);
  }
}
