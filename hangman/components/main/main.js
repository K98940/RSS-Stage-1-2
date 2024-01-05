import { createTag } from '/hangman/utils/createTag.js';
import { gallows } from '/hangman/components/gallows/gallows.js';
import { game } from '/hangman/components/game/game.js';

export const Main = () => {
  const main = createTag('main');
  main.append(gallows());
  main.append(game());
  return main;
};
