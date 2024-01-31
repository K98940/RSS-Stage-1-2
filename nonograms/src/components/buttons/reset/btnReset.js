import state from '../../../state/state';
import createElement from '../../../utils/createElement';
import renderDesk from '../../plotContainer/renderDesk';
import { startTimer } from '../../timer/timer';
import svg from '../../../assets/icons/reset.svg';
import './btnReset.css';

export default () => {
  const btnReset = createElement({
    tag: 'button',
    txt: 'Reset game',
    cls: 'button btn-reset',
    icon: svg,
  });
  btnReset.addEventListener('click', resetGame);
  return btnReset;
};

const resetGame = () => {
  renderDesk(state.game.currentGame);
  state.game.timer = 0;
  const opacity = '0';
  state.html.root.style.setProperty('--opacity-cell-text', opacity);
  state.html.main.classList.remove('gameover');
  startTimer(false);
};
