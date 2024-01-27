import state from '../../../state/state';
import createElement from '../../../utils/createElement';
import renderDesk from '../../plotContainer/renderDesk';
import { triggerTimer } from '../../timer/timer';
import './btnReset.css';

export default () => {
  const btnReset = createElement({ tag: 'button', txt: 'Reset game' });
  btnReset.addEventListener('click', resetGame);

  return btnReset;
};

const resetGame = () => {
  renderDesk(state.game.currentGame);
  triggerTimer(false);
};
