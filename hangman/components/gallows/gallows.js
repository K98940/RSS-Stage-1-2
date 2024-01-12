import { createTag } from '../../utils/createTag.js';
import { state } from '../../utils/loadConfig.js';

export const gallows = () => {
  const gallows = createTag({ tag: 'article', classList: 'gallows' });

  const gallowsElements = state.errorOrder.map((el, i) => {
    const img = createTag({
      tag: 'img',
      classList: `gallows__${state.errorOrder[i]}`,
      src: `./components/gallows/img/${state.errorOrder[i]}.webp`,
    });
    return img;
  });

  const h1 = createTag({
    tag: 'h1',
    classList: 'gallows__title',
    innerText: 'hangman game',
  });

  gallows.append(...gallowsElements);
  gallows.append(h1);
  return gallows;
};
