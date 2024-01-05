import { createTag } from '../../utils/createTag.js';

export const virtualKeyboard = () => {
  const virtualKeyboard = createTag('div');
  virtualKeyboard.classList = 'virtual-keyboard';
  virtualKeyboard.innerText = 'virtualKeyboard';

  return virtualKeyboard;
};
