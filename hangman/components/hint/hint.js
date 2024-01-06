import { createTag } from '../../utils/createTag.js';
import { state } from '../../utils/loadConfig.js';

export const hint = () => {
  const { hint } = state.newQuestion;
  let hintElement = document.querySelector('.hint');
  if (hintElement) hintElement.innerHTML = '';
  else {
    hintElement = createTag('div');
    hintElement.classList = 'hint';
  }
  hintElement.innerText = hint;

  return hintElement;
};
