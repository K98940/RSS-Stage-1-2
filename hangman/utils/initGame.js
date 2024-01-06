import { state } from './loadConfig.js';
import { getNewQuestion } from './getNewQuestion.js';
import { word } from '../components/word/word.js';
import { hint } from '../components/hint/hint.js';

export const initGame = async () => {
  resetGame().then(() => {
    state.newQuestion = getNewQuestion();
    state.incorrectGuesses = 0;
    state.keyPressed = [];
  });
};

const resetGame = () => {
  return new Promise((resolve, _) => {
    const keys = document.querySelectorAll(
      '.virtual-keyboard__key[data-loose], .virtual-keyboard__key[data-succes]'
    );
    keys &&
      keys.forEach((key, i) => {
        setTimeout(() => {
          key.removeAttribute('data-loose');
          key.removeAttribute('data-succes');
        }, 200 * (i + 1));
      });

    const gallows = document.querySelector('.gallows');
    gallows &&
      state.errorOrder.forEach((error, i) =>
        setTimeout(() => gallows.removeAttribute(error), 200 * (i + 1))
      );

    const characters = document.querySelectorAll(
      '.question__character[data-pressed]'
    );
    characters &&
      characters.forEach((char, i, chars) => {
        setTimeout(() => char.removeAttribute('data-pressed'), 200 * (i + 1));
        if (i + 1 === chars.length)
          setTimeout(() => {
            word();
            hint();
          }, 2000);
      });

    const incorrectGuesses = document.querySelector(
      '.current-state__incorrect-guesses'
    );
    if (incorrectGuesses) {
      for (let i = state.incorrectGuesses; i >= 0; i -= 1) {
        setTimeout(() => {
          incorrectGuesses.innerText = `${i} / ${state.errorLimit}`;
        }, 250 * (state.errorLimit - i + 1));
        state.incorrectGuesses = i;
      }
    }

    resolve();
  });
};
