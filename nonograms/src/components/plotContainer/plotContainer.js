import state from '../../state/state';
import createElement from '../../utils/createElement';
import './plotContainer.css';

export default () => {
  const container = createElement({ tag: 'div', cls: 'game-container' });
  container.addEventListener('click', clickHandler);
  container.addEventListener('contextmenu', contextMenuHandler);
  state.html.plotContainer = container;
  return container;
};

const getClickedCell = (target) => {
  const { plot } = state.game;
  return plot.flat(1).filter((cell) => cell.element === target)[0];
};

const contextMenuHandler = (e) => {
  e.preventDefault();
  const clickedCell = getClickedCell(e.target);
  if (clickedCell) {
    const { state } = clickedCell;
    switch (state) {
      case '⚪':
        clickedCell.element.classList.toggle('cell_checked');
        clickedCell.element.classList.remove('cell_fill');
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

  console.log(e);
};

const clickHandler = (e) => {
  const clickedCell = getClickedCell(e.target);
  if (clickedCell) {
    const { state } = clickedCell;
    switch (state) {
      case '⚪':
        clickedCell.state = '⚫';
        clickedCell.element.classList.add('cell_fill');
        clickedCell.element.classList.remove('cell_checked');
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
      setTimeout(() => alert('Great! You have solved the nonogram!'), 0);
  }
};

const isAllCorrectChecked = () => {
  const { plot } = state.game;
  return !plot.flat(1).some((cell) => cell.state !== cell.value);
};
