import { Button } from '../button';
import { Component } from '../component';
import './modal-message.css';

export class ModalMessage {
  dialog: HTMLDialogElement;

  constructor() {
    this.dialog = document.createElement('dialog');
    this.dialog.classList.add('dialog');
    document.body.append(this.dialog);
  }

  public show(text: string): void {
    const container = new Component({ classNames: ['dialog__container'] });
    const content = new Component({ classNames: ['dialog__content'], textContent: text });
    const btnClose = new Button({
      textContent: 'OK',
      classNames: ['dialog__btn-close'],
      callback: () => this.handleClick(),
    });

    container.appendNodes(content, btnClose);
    this.dialog.innerHTML = '';
    this.dialog.append(container.getNode());
    this.dialog.showModal();
  }

  private handleClick(): void {
    this.dialog.close();
  }
}
