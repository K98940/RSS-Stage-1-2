import { createTag } from '../../utils/createTag.js';
import { state } from '../../utils/loadConfig.js';

export const hint = () => {
  const { hint } = state.newQuestion;
  const hintElement = createTag('div');
  hintElement.classList = 'hint';
  hintElement.innerText = hint;

  return hintElement;
};
