import state from '../../state/state';
import createElement from '../../utils/createElement';
import { parseTimer, triggerTimer } from '../timer/timer';
import './plotContainer.css';

export default () => {
  const container = createElement({ tag: 'div', cls: 'game-container' });
  container.addEventListener('click', clickHandler);
  container.addEventListener('contextmenu', contextMenuHandler);
  state.html.plotContainer = container;
  return container;
};

const checkGameStart = () => {
  if (!state.game.isGameStarted) {
    state.game.isGameStarted = true;
    triggerTimer();
  }
};

const getClickedCell = (target) => {
  const { plot } = state.game;
  return plot.flat(1).filter((cell) => cell.element === target)[0];
};

const contextMenuHandler = (e) => {
  e.preventDefault();
  const clickedCell = getClickedCell(e.target);
  if (clickedCell) {
    const cellState = clickedCell.state;
    switch (cellState) {
      case '⚪':
        clickedCell.element.classList.toggle('cell_checked');
        clickedCell.element.classList.remove('cell_fill');
        checkGameStart();
        break;
      case '⚫':
        clickedCell.state = '⚪';
        clickedCell.element.classList.toggle('cell_checked');
        clickedCell.element.classList.remove('cell_fill');
        break;

      default:
        break;
    }
  }
};

const clickHandler = (e) => {
  const clickedCell = getClickedCell(e.target);
  if (clickedCell) {
    const cellState = clickedCell.state;
    switch (cellState) {
      case '⚪':
        clickedCell.state = '⚫';
        clickedCell.element.classList.add('cell_fill');
        clickedCell.element.classList.remove('cell_checked');
        checkGameStart();
        break;
      case '⚫':
        clickedCell.state = '⚪';
        clickedCell.element.classList.remove('cell_fill');
        clickedCell.element.classList.remove('cell_checked');
        break;

      default:
        break;
    }

    if (isAllCorrectChecked())
      setTimeout(() => {
        alert(
          `Great! You have solved the nonogram in ${parseTimer(
            state.game.timer
          )} seconds!`
        );
        triggerTimer(false);
      }, 0);
  }
};

const isAllCorrectChecked = () => {
  const { plot } = state.game;
  return !plot.flat(1).some((cell) => cell.state !== cell.value);
};
