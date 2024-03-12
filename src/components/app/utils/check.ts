import { Cell } from '../../../types/types';

export const check = (sentence: Cell[], pattern: string) => {
  const patterns = pattern.split(' ');

  sentence.forEach((word, i) => {
    if (i === 0) return;
    if (word.text === patterns[i - 1]) {
      word.node.classList.add('word_correct');
    } else word.node.classList.add('word_wrong');
  });
};
