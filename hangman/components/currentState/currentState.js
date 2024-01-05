import { createTag } from '../../utils/createTag.js';

export const currentState = () => {
  const currentState = createTag('div');
  currentState.classList = 'current-state';
  currentState.innerText = 'currentState';

  return currentState;
};
