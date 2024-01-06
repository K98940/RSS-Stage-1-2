import { createTag } from '../../utils/createTag.js';
import { state } from '../../utils/loadConfig.js';

export const virtualKeyboard = () => {
  const virtualKeyboard = createTag('div');
  virtualKeyboard.classList = 'virtual-keyboard';

  const rowsKeys = state.keyboard.map((row) => {
    const kyes = row.map((key) => {
      const div = createTag('div');
      div.setAttribute('data-code', key.code);
      div.classList = 'virtual-keyboard__key';
      div.innerText = key.title;
      return div;
    });

    const rowDiv = createTag('div');
    rowDiv.classList = 'virtual-keyboard__row';
    rowDiv.append(...kyes);
    return rowDiv;
  });

  virtualKeyboard.append(...rowsKeys);
  return virtualKeyboard;
};
