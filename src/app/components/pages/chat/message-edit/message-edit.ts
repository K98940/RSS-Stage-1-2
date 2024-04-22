import './message-edit.css';
import { TextInput } from './text-area/text-area';
import { Component } from '../../../component/component';
import { Btn, EditReturn } from '../../../../../types/types';
import { Button } from '../../../component/button';

export class MessageEdit {
  textArea: TextInput | undefined;

  btnOK: Button | undefined;

  text: string;

  id: string;

  constructor() {
    this.text = '';
    this.id = '';
  }

  public openDialog(id: string, text: string): Promise<EditReturn> {
    this.text = text;
    this.id = id;
    const dialog = document.createElement('dialog');
    dialog.classList.add('dialog');
    const container = new Component({ classNames: ['dialog__container'] });
    const form = new Component({
      tag: 'form',
      classNames: ['dialog__form'],
      attributes: [['method', 'dialog']],
    });
    this.textArea = new TextInput((e) => this.handleKeyDown(e), text);
    const btnContainer = new Component({ classNames: ['btn-container'] });

    const styleInactiveBtn = this.textArea.isEmpty ? '__inactive-element' : '';
    this.btnOK = new Button({
      textContent: 'OK',
      classNames: ['form__button', styleInactiveBtn],
      attributes: [['value', Btn.OK]],
    });
    const btnCancel = new Button({
      textContent: 'NOT OK',
      classNames: ['form__button'],
      attributes: [['value', Btn.CANCEL]],
    });
    btnContainer.appendNodes(this.btnOK, btnCancel);

    form.appendNodes(this.textArea, btnContainer);
    container.appendNodes(form);
    dialog.appendChild(container.getNode());
    document.body.append(dialog);
    dialog.showModal();

    return new Promise((resolve) => {
      const close = () => {
        dialog.remove();
        resolve({
          id: this.id,
          text: this.textArea?.value() || '',
          button: dialog.returnValue,
        });
      };
      dialog.addEventListener('close', close);
    });
  }

  private handleKeyDown(e: unknown): void {
    if (e instanceof Event && this.btnOK) {
      const isEmpty = !this.textArea?.value()?.trim();
      if (isEmpty) {
        this.btnOK.active = false;
      } else {
        this.btnOK.active = true;
      }
    }
  }
}
