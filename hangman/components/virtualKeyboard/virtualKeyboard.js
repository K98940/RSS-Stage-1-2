import { createTag } from './../../utils/createTag.js';
import { state } from './../../utils/loadConfig.js';

export const virtualKeyboard = () => {
  const virtualKeyboard = createTag({
    tag: 'div',
    classList: 'virtual-keyboard',
  });

  const rowsKeys = state.keyboard.map((row) => {
    const kyes = row.map((key) => {
      return createTag({
        tag: 'div',
        classList: 'virtual-keyboard__key',
        innerText: key.title,
        attr: 'data-code',
        attrValue: key.code,
      });
    });

    const rowDiv = createTag({
      tag: 'div',
      classList: 'virtual-keyboard__row',
    });
    rowDiv.append(...kyes);
    return rowDiv;
  });

  virtualKeyboard.append(...rowsKeys);
  return virtualKeyboard;
};
