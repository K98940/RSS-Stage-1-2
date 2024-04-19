import { Component } from '../component';

export class BlockUIMessage {
  private static instance: BlockUIMessage | undefined;

  private dialog: HTMLDialogElement;

  private content: Component;

  private constructor() {
    this.dialog = document.createElement('dialog');
    this.dialog.classList.add('dialog');
    this.dialog.addEventListener('keydown', (e) => this.handleKeyDown(e));

    const container = new Component({ classNames: ['dialog__container'] });
    this.content = new Component({ classNames: ['dialog__content'] });

    container.appendNodes(this.content);
    this.dialog.appendChild(container.getNode());
  }

  public static getInstance(): BlockUIMessage {
    if (!BlockUIMessage.instance) BlockUIMessage.instance = new BlockUIMessage();
    return BlockUIMessage.instance;
  }

  public show(text: string): void {
    this.content.setTextContent(text);
    if (this.dialog.open) return;
    document.body.append(this.dialog);
    this.dialog.showModal();
  }

  public hide(): void {
    this.dialog.close();
    this.dialog.remove();
  }

  private handleKeyDown(e: unknown): boolean {
    if (e instanceof Event) {
      e.preventDefault();
    }
    return false;
  }
}
