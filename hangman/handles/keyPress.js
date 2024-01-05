import { state } from '../utils/loadConfig.js';

export const keyPress = (e) => {
  const { code } = e;
  const isPressedAgain = state.keyPressed.includes(code);
  if (isPressedAgain) return;
  state.keyPressed.push(code);

  let isCorrect = false;
  const characters = [...document.querySelectorAll('.question__character')];
  const pressedCount = characters.reduce((count, c) => {
    if (c.dataset.character === code) {
      c.setAttribute('data-pressed', '1');
      isCorrect = true;
    }
    if (c.dataset.pressed) {
      return (count += 1);
    }
    return count;
  }, 0);

  if (!isCorrect) {
    state.incorrectGuesses += 1;
    updateIncorrectGuesses();
    if (state.incorrectGuesses >= state.errorLimit) console.log('LOOSE!');
  }
  if (pressedCount === characters.length) console.log('WIN!');
};

const updateIncorrectGuesses = () => {
  const incorrectGuesses = document.querySelector(
    '.current-state__incorrect-guesses'
  );
  incorrectGuesses &&
    (incorrectGuesses.innerText = `${state.incorrectGuesses} / ${state.errorLimit}`);
};
