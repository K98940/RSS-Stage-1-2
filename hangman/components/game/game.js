import { createTag } from '/hangman/utils/createTag.js';
import { question } from '/hangman/components/question/question.js';
import { hint } from '/hangman/components/hint/hint.js';
import { currentState } from '/hangman/components/currentState/currentState.js';
import { virtualKeyboard } from '/hangman/components/virtualKeyboard/virtualKeyboard.js';

export const game = () => {
  const game = createTag('article');
  game.classList = 'game';

  game.append(question());
  game.append(hint());
  game.append(currentState());
  game.append(virtualKeyboard());
  return game;
};
