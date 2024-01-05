import { createTag } from '/hangman/utils/createTag.js';

export const hint = () => {
  const hint = createTag('div');
  hint.classList = 'hint';
  hint.innerText = 'hint';

  return hint;
};
