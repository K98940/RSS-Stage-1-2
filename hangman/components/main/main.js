import { createTag } from '../../utils/createTag.js';
import { gallows } from '../gallows/gallows.js';
import { game } from '../game/game.js';

export const Main = () => {
  const main = createTag('main');
  main.append(gallows());
  main.append(game());
  return main;
};
