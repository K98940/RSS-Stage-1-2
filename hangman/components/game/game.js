import { createTag } from './../../utils/createTag.js';
import { word } from './../word/word.js';
import { hint } from './../hint/hint.js';
import { currentState } from './../currentState/currentState.js';
import { virtualKeyboard } from './../virtualKeyboard/virtualKeyboard.js';

export const game = () => {
  const game = createTag({ tag: 'article', classList: 'game' });

  game.append(word());
  game.append(hint());
  game.append(currentState());
  game.append(virtualKeyboard());
  return game;
};
