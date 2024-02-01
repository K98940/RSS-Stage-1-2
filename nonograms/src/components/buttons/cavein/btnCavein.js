import state from '../../../state/state';
import { createButton } from '../../../utils/createNode';
import { startTimer } from '../../timer/timer';
import svg from '../../../assets/icons/solution.svg';
import './btnCavein.css';

export default () => {
  const btn = createButton({
    txt: 'Solution',
    icon: svg,
  });
  btn.addEventListener('click', clickCavein);
  return btn;
};

const clickCavein = () => {
  state.game.showCellsValue = true;
  state.game.isGameStarted = false;
  startTimer(false);
  const opacity = '1';
  state.html.root.style.setProperty('--opacity-cell-text', opacity);
  state.html.main.classList.add('gameover');
};
