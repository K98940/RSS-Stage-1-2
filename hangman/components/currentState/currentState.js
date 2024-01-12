import { createTag } from './../../utils/createTag.js';
import { state } from './../../utils/loadConfig.js';

export const currentState = () => {
  let incorrectGuesses = document.querySelector(
    '.current-state__incorrect-guesses'
  );
  if (incorrectGuesses) incorrectGuesses.innerHTML = '';
  else
    incorrectGuesses = createTag({
      tag: 'span',
      classList: 'current-state__incorrect-guesses',
    });
  incorrectGuesses.innerText = `${state.incorrectGuesses} / ${state.errorLimit}`;

  const labelGuesses = createTag({
    tag: 'label',
    innerText: 'Incorrect guesses:',
  });

  const currentState = createTag({ tag: 'div', classList: 'current-state' });
  currentState.append(labelGuesses, incorrectGuesses);

  return currentState;
};
