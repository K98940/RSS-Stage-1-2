import { state } from '../utils/loadConfig.js';

export const keyPress = (e) => {
  const { code } = e;
  const characters = [...document.querySelectorAll('.question__character')];

  const pressedCount = characters.reduce((count, c) => {
    if (c.dataset.character === code) {
      c.setAttribute('data-pressed', '1');
    }
    if (c.dataset.pressed) {
      return (count += 1);
    }
    return count;
  }, 0);

  if (pressedCount === characters.length) console.log('WIN');
};
