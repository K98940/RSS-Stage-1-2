import './message-edit.css';
import { Component } from '../../../component/component';
import { Btn, EditReturn } from '../../../../../types/types';

export class MessageEdit {
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
    const textArea = new Component({
      tag: 'textarea',
      textContent: text,
      classNames: ['form__textarea'],
      attributes: [['placeholder', 'message...']],
    });
    const btnContainer = new Component({ classNames: ['btn-container'] });
    const btnOK = new Component({
      tag: 'button',
      textContent: 'OK',
      classNames: ['form__button'],
      attributes: [['value', Btn.OK]],
    });
    const btnCancel = new Component({
      tag: 'button',
      textContent: 'NOT OK',
      classNames: ['form__button'],
      attributes: [['value', Btn.CANCEL]],
    });
    btnContainer.appendNodes(btnOK, btnCancel);

    form.appendNodes(textArea, btnContainer);
    container.appendNodes(form);
    dialog.appendChild(container.getNode());
    document.body.append(dialog);
    dialog.showModal();

    return new Promise((resolve) => {
      const close = () => {
        dialog.remove();
        resolve({
          id: this.id,
          text: textArea.value() || '',
          button: dialog.returnValue,
        });
      };
      dialog.addEventListener('close', close);
    });
  }
}
