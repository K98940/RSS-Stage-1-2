import { createButton } from '../../../utils/createNode';
import { isSavedGame, loadState } from '../../../utils/localStorage';
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
  if (isSavedGame()) {
    state.html.btnLoad.classList.remove('button_disabled');
  } else {
    state.html.btnLoad.classList.add('button_disabled');
  }
  return btnLoad;
};
