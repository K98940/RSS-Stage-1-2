import state from '../../state/state';
import createElement from '../../utils/createElement';
import newCell from './cell/newCell';
import './plotContainer.css';

export default () => {
  const { plot } = state.game;
  const container = createElement({ tag: 'div', cls: 'container' });
  console.log(plot);
  plot.forEach((row, i) =>
    row.forEach((el, j) => {
      const cell = newCell();
      plot[i][j] = {
        state: '⚪',
        value: el,
        element: cell,
      };
      container.appendChild(cell);
    })
  );

  container.addEventListener('click', plotHandler);
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

    if (isAllCorrectChecked()) setTimeout(() => alert('you win'), 0);
  }
};

const isAllCorrectChecked = () => {
  const { plot } = state.game;
  return !plot.flat(1).some((cell) => cell.state !== cell.value);
};
