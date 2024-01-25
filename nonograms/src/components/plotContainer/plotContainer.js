import state from '../../state/state';
import createElement from '../../utils/createElement';
import './plotContainer.css';

export default () => {
  const container = createElement({ tag: 'div', cls: 'game-container' });
  container.addEventListener('click', plotHandler);
  state.html.plotContainer = container;
  return container;
};

const plotHandler = (e) => {
  const { plot } = state.game;
  const clickedCell = plot
    .flat(1)
    .filter((cell) => cell.element === e.target)[0];

  if (clickedCell) {
    const { state } = clickedCell;
    switch (state) {
      case '⚪':
        clickedCell.state = '⚫';
        clickedCell.element.classList.add('cell_fill');
        break;
      case '⚫':
        clickedCell.state = '⚪';
        clickedCell.element.classList.remove('cell_fill');
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
