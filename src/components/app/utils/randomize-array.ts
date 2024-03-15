import { MyElement } from '../Element/my-element';
import { Cell } from './../../../types/types';
import { getRandom } from './random';

export const randomizeArray = (array: Cell[]): Cell[] => {
  const source = [...array];
  const result = [];
  while (source.length > 0) {
    const element = source.splice(getRandom(0, source.length - 1), 1)[0];
    result.push(element);
  }
  return result;
};

export const setCardsWidth = (container: MyElement): void => {
  setTimeout(() => {
    const sourceHTMLElement = container.getNode().children[0];
    if (sourceHTMLElement instanceof HTMLElement) {
      sourceHTMLElement.style.gap = '0';
    }

    const nodes = [...container.getNode().children[0].children];
    nodes.forEach((node) => {
      if (!(node instanceof HTMLElement)) return;
      const isAlreadyWidth = node.getAttribute('width');
      if (isAlreadyWidth) return;

      const newWidth = window.getComputedStyle(node).getPropertyValue('width');
      node.style.width = `${newWidth}px`;
      node.setAttribute('width', newWidth);
      node.style.setProperty('--width-element', `${newWidth}`);
    });

    if (sourceHTMLElement instanceof HTMLElement) {
      sourceHTMLElement.style.gap = '1rem';
      setTimeout(() => {
        document.documentElement.style.setProperty(
          '--trantition-duration',
          `500ms`,
        );
      }, 1000);
    }
  }, 0);
};
