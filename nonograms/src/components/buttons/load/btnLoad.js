import { createButton } from '../../../utils/createNode';
import { checkSavedGame, loadState } from '../../../utils/localStorage';
import svg from '../../../assets/icons/load.svg';
import './btnLoad.css';
import state from '../../../state/state';

export default () => {
  const btnLoad = createButton({
    cls: 'button_disabled',
    txt: 'Continue last game',
    icon: svg,
  });
  state.html.btnLoad = btnLoad;
  btnLoad.firstElementChild.addEventListener('click', loadState);
  checkSavedGame();
  return btnLoad;
};
