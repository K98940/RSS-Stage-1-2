import { createTag } from './../../utils/createTag.js';
import { state } from './../../utils/loadConfig.js';

export const word = () => {
  let word = document.querySelector('.question');
  if (word) word.innerHTML = '';
  else word = createTag({ tag: 'div', classList: 'question' });

  const { question } = state.newQuestion;
  const chars = [...question].map((c, i) => {
    return createTag({
      tag: 'div',
      classList: 'question__character',
      innerText: c,
      attr: 'data-character',
      attrValue: `Key${c.toUpperCase()}`,
    });
  });

  console.log(
    `%cthe new word is %c${question} 🚩`,
    'font-size: 16px;',
    'color: orange; font-size: 24px; font-weight: 800'
  );
  word.append(...chars);
  return word;
};
