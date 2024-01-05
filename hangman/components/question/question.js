import { createTag } from '/hangman/utils/createTag.js';

export const question = () => {
  const question = createTag('div');
  question.classList = 'question';
  question.innerText = 'question';

  return question;
};
