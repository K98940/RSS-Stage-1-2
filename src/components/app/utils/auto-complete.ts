import { Cell } from './../../../types/types';

export const autoComplete = (sentence: Cell[], delay: number): void => {
  const clickEvent = new MouseEvent('click');
  sentence
    .sort((a, b) => a.id - b.id)
    .forEach((word, i) => {
      setTimeout(() => {
        word.node.dispatchEvent(clickEvent);
      }, i * delay);
    });
};
