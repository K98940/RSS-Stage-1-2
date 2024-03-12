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
