import { Cell, Place } from './../../../types/types';

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

export const resetCurrentLevel = (
  arrSource: Cell[] | null,
  arrDest: Cell[] | null,
  nodesSrc: Element | null,
  nodeDest: Element | null,
) => {
  const dest = nodeDest?.children[1].children || [];
  [...dest].forEach((node) => {
    node.setAttribute('place', Place.source);
    nodesSrc?.appendChild(node);
  });
  if (arrDest) {
    const movingCells = [...arrDest].map((cell) => {
      return { id: cell.id, text: cell.text, node: cell.node };
    });
    arrDest.length = 1;
    movingCells.splice(0, 1);
    arrSource?.push(...movingCells);
  }
};
