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
  dialog = createTag('dialog');
  dialog.classList = dialogClass;
  dialog.addEventListener('close', dialogClose);

  const form = createTag('form');
  form.classList = formClass;
  form.setAttribute('method', 'dialog');

  const h1 = createTag('h1');
  h1.classList = h1Class;
  h1.innerText = title;

  const p = createTag('p');
  p.classList = pClass;
  p.innerText = msg;

  const formBtn = createTag('button');
  formBtn.classList = btnClass;
  formBtn.innerText = btnMsg;

  form.append(h1, p, formBtn);
  dialog.append(form);
  body.append(dialog);
  dialog.showModal();
};

const dialogClose = (e) => {
  e.target.remove();
  initGame();
};
