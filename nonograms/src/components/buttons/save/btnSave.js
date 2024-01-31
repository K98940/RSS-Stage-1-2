import createElement from '../../../utils/createElement';
import { saveState } from '../../../utils/localStorage';
import svg from '../../../assets/icons/bookmarks.svg';
import './btnSave.css';

export default () => {
  const btnSave = createElement({
    tag: 'button',
    txt: 'Save game',
    cls: 'button btn-save',
    icon: svg,
  });
  btnSave.addEventListener('click', saveState);
  return btnSave;
};
