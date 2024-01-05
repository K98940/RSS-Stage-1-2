import { createTag } from '../../utils/createTag.js';
import { state } from '../../utils/loadConfig.js';

export const word = () => {
  const word = createTag('div');
  word.classList = 'question';

  const { question } = state.newQuestion;
  const chars = [...question].map((c, i) => {
    const char = createTag('div');
    char.innerText = c;
    char.setAttribute('data-character', `Key${c.toUpperCase()}`);
    char.classList = 'question__character';
    return char;
  });

  word.append(...chars);
  return word;
};
