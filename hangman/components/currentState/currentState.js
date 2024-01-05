import { createTag } from '../../utils/createTag.js';
import { state } from '../../utils/loadConfig.js';

export const currentState = () => {
  const incorrectGuesses = createTag('span');
  incorrectGuesses.classList = 'current-state__incorrect-guesses';
  incorrectGuesses.innerText = `${state.incorrectGuesses} / ${state.errorLimit}`;

  const labelGuesses = createTag('label');
  labelGuesses.innerText = 'Incorrect guesses:';

  const currentState = createTag('div');
  currentState.classList = 'current-state';
  currentState.append(labelGuesses, incorrectGuesses);

  return currentState;
};
