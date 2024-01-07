import { createTag } from '../../utils/createTag.js';
import { initGame } from '../../utils/initGame.js';
import { state } from '../../utils/loadConfig.js';

export const createModal = (win) => {
  let msg = '';
  const body = document.querySelector('body');
  let dialog = document.querySelector('dialog');
  if (dialog) dialog.remove();
  dialog = createTag('dialog');
  if (win) {
    msg = 'You win';
    dialog.classList = 'dialog__wrapper dialod_win';
  } else {
    msg = 'You lost';
    dialog.classList = 'dialog__wrapper dialod_lost';
  }
  dialog.addEventListener('close', dialogClose);

  const form = createTag('form');
  form.classList = 'form';
  form.setAttribute('method', 'dialog');

  const formMessage = createTag('p');
  formMessage.classList = 'form__message';
  formMessage.innerText = msg;

  const formSecretWord = createTag('p');
  formSecretWord.classList = 'form__secret-word';
  formSecretWord.innerText = `Secret word: ${state.newQuestion.question}`;

  const formBtnClose = createTag('button');
  formBtnClose.classList = 'form__btn-play';
  formBtnClose.innerText = 'play again';

  form.append(formMessage, formSecretWord, formBtnClose);
  dialog.append(form);
  body.append(dialog);
  dialog.showModal();
};

const dialogClose = (e) => {
  e.target.remove();
  initGame();
};
