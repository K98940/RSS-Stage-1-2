import { createTag } from '/hangman/utils/createTag.js';

export const gallows = () => {
  const gallows = createTag('article');
  gallows.classList = 'gallows';

  const img = createTag('img');
  img.classList = 'gallows__img';
  img.src = 'components/gallows/img/gallows.webp';

  const h1 = createTag('h1');
  h1.classList = 'gallows__title';
  h1.innerText = 'hangman game';

  gallows.append(img);
  gallows.append(h1);
  return gallows;
};
