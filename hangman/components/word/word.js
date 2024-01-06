import { createTag } from '../../utils/createTag.js';
import { state } from '../../utils/loadConfig.js';

export const word = () => {
  let word = document.querySelector('.question');
  if (word) word.innerHTML = '';
  else {
    word = createTag('div');
    word.classList = 'question';
  }

  const { question } = state.newQuestion;
  const chars = [...question].map((c, i) => {
    const char = createTag('div');
    char.innerText = c;
    char.setAttribute('data-character', `Key${c.toUpperCase()}`);
    char.classList = 'question__character';
    return char;
  });

  console.log(
    `%cthe new word is %c${question} 🚩`,
    'font-size: 16px;',
    'color: orange; font-size: 24px; font-weight: 800'
  );
  word.append(...chars);
  return word;
};
