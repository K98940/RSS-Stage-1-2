import { createTag } from '../../utils/createTag.js';
import { initGame } from '../../utils/initGame.js';

export const createModal = (
  win,
  {
    caption = '',
    title = '',
    msg = '',
    btnMsg = 'play again',
    style: {
      dialogClass = '',
      formClass = 'form',
      h1Class = 'form__h1',
      pClass = 'form__p',
      btnClass = 'form__btn',
    },
  }
) => {
  const body = document.querySelector('body');
  let dialog = document.querySelector('dialog');
  if (dialog) dialog.remove();

  dialog = createTag({ tag: 'dialog', classList: dialogClass });
  dialog.addEventListener('close', dialogClose);
  const form = createTag({
    tag: 'form',
    classList: formClass,
    attr: 'method',
    attrValue: 'dialog',
  });
  const h1 = createTag({ tag: 'h1', classList: h1Class, innerText: title });
  const p = createTag({ tag: 'p', classList: pClass, innerText: msg });
  const formBtn = createTag({
    tag: 'button',
    classList: btnClass,
    innerText: btnMsg,
  });

  form.append(h1, p, formBtn);
  dialog.append(form);
  body.append(dialog);
  dialog.showModal();
};

const dialogClose = (e) => {
  e.target.remove();
  initGame();
};
