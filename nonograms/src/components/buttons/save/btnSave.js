import { createButton } from '../../../utils/createNode';
import { saveState } from '../../../utils/localStorage';
import svg from '../../../assets/icons/bookmarks.svg';
import './btnSave.css';

export default () => {
  const btnSave = createButton({
    txt: 'Save game',
    icon: svg,
    attr: [['data-role', 'save']],
  });
  btnSave.addEventListener('click', saveState);
  return btnSave;
};
