import { createModal } from '../components/modal/modal.js';
import { state } from '../utils/loadConfig.js';

export const keyPress = (e) => {
  const code = e.target.dataset.code || e.code;
  if (!isCorrectKeyCode(code)) return;
  state.keyPressed.push(code);

  let isCorrectGuess = false;
  const secretWord = [...document.querySelectorAll('.question__character')];
  const CorrectGuessesCount = secretWord.reduce((count, char) => {
    if (char.dataset.character === code) {
      char.setAttribute('data-pressed', '1');
      isCorrectGuess = true;
    }
    if (char.dataset.pressed) {
      return (count += 1);
    }
    return count;
  }, 0);

  renderKeyboard(code, isCorrectGuess);
  if (!isCorrectGuess) {
    state.incorrectGuesses += 1;
    renderGuesses();
    renderGallows(state.incorrectGuesses);
  }
  checkGameOver(CorrectGuessesCount, secretWord);
};

const checkGameOver = (CorrectGuessesCount, secretWord) => {
  if (state.incorrectGuesses >= state.errorLimit)
    createModal(false, {
      title: 'You lost',
      msg: `Secret word: ${state.newQuestion.question}`,
      style: {
        dialogClass: 'dialog__wrapper dialod_lost',
      },
    });
  if (CorrectGuessesCount === secretWord.length)
    createModal(true, {
      title: 'You win',
      msg: `Secret word: ${state.newQuestion.question}`,
      style: {
        dialogClass: 'dialog__wrapper dialod_win',
      },
    });
};

const renderGuesses = () => {
  const incorrectGuesses = document.querySelector(
    '.current-state__incorrect-guesses'
  );
  incorrectGuesses &&
    (incorrectGuesses.innerText = `${state.incorrectGuesses} / ${state.errorLimit}`);
};

const renderKeyboard = (code, succes) => {
  const keys = document.querySelectorAll('.virtual-keyboard__key');
  keys &&
    keys.forEach((k) => {
      if (code !== k.dataset.code) return;
      if (succes) k.setAttribute('data-succes', '');
      else k.setAttribute('data-loose', '');
    });
};

const renderGallows = (incorrectGuesses) => {
  const gallow = document.querySelector('.gallows');
  gallow &&
    gallow.setAttribute(state.errorOrder[incorrectGuesses] || 'error', '');
};

const isCorrectKeyCode = (code) => {
  const VirtualKeyboard = state.keyboard.flat(1).map((key) => key.code);
  if (!VirtualKeyboard.includes(code)) return false;
  const isPressedAgain = state.keyPressed.includes(code);
  if (isPressedAgain) return false;
  const isOpenModal = document.querySelector('body>dialog');
  if (isOpenModal) return false;
  return true;
};
