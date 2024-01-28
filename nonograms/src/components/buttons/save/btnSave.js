import createElement from '../../../utils/createElement';
import { saveState } from '../../../utils/localStorage';
import './btnSave.css';

export default () => {
  const btnSave = createElement({
    tag: 'button',
    txt: 'Save game',
    cls: 'button',
  });
  btnSave.addEventListener('click', saveState);
  return btnSave;
};
