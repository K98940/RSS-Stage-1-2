import { createTag } from '../../utils/createTag.js';
import { state } from '../../utils/loadConfig.js';

export const gallows = () => {
  const gallows = createTag('article');
  gallows.classList = 'gallows';

  console.log('state', state);

  const gallowsElements = state.errorOrder.map((el, i) => {
    console.log('el', el);
    const img = createTag('img');
    img.classList = `gallows__${state.errorOrder[i]}`;
    img.src = `./components/gallows/img/${state.errorOrder[i]}.webp`;
    return img;
  });

  console.log('gallowsElements', gallowsElements);

  const h1 = createTag('h1');
  h1.classList = 'gallows__title';
  h1.innerText = 'hangman game';

  gallows.append(...gallowsElements);
  gallows.append(h1);
  return gallows;
};
