import state from '../../state/state';
import createElement from '../../utils/createElement';
import rotateMatrix from '../../utils/rotateMatrix';
import newCell from './cell/newCell';
import './plotContainer.css';

export default () => {
  const { plot } = state.game;

  const rotatedPlot = rotateMatrix(plot);
  const clueTopRotated = createClueArray(rotatedPlot);
  // выравниваем верхнии подсказки в высоту
  const clueTopRows = Math.max(...clueTopRotated.map((row) => row.length));
  clueTopRotated.forEach((row) => {
    while (row.length < clueTopRows) row.push(0);
  });
  const clueTop = rotateMatrix(clueTopRotated, 'left');

  const clueLeft = createClueArray(plot);
  // выравниваем левые подсказки в ширину
  const clueLeftColumns = Math.max(...clueLeft.map((row) => row.length));
  clueLeft.forEach((row) => {
    while (row.length < clueLeftColumns) row.unshift(0);
  });

  // объеденить подсказки слева с игровым полем
  const clueLeftAndPlot = plot.map((row, i) => {
    return [...clueLeft[i], ...row];
  });

  // и выравниваем в ширину посказки сверху
  const сolumnsCountTotal = clueLeftAndPlot[0].length;
  clueTop.forEach((row) => {
    while (row.length < сolumnsCountTotal) row.unshift('');
  });

  // объеденить подсказки сверху с игровым полем
  const gameDesk = [...clueTop, ...clueLeftAndPlot];

  //сформируем элементы игрового поля
  const container = createElement({ tag: 'div', cls: 'game-container' });
  gameDesk.forEach((row, i) =>
    row.forEach((el, j) => {
      const cell = newCell();
      if (el === '⚫' || el === '⚪') {
        cell.setAttribute('role', 'game');
        cell.textContent = el;
        gameDesk[i][j] = {
          state: '⚪',
          value: el,
          element: cell,
        };
      }
      if (Number.isFinite(el)) {
        cell.setAttribute('role', 'clue');
        cell.textContent = el > 0 ? el : '';
        gameDesk[i][j] = {
          state: el,
          value: el,
          element: cell,
        };
      }
      if (el === '') {
        cell.setAttribute('role', 'empty');
        gameDesk[i][j] = {
          state: el,
          value: el,
          element: cell,
        };
      }
      container.appendChild(cell);
    })
  );

  state.game.plot = gameDesk;
  const columnsCount = gameDesk[0].length;
  container.addEventListener('click', plotHandler);
  container.style.setProperty('--columns-count', columnsCount);
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

const createClueArray = (matrix) => {
  const clues = [];
  matrix.forEach((row, i) => {
    let count = 0;
    clues[i] = [];

    row.forEach((cell) => {
      if (cell === '⚫') {
        count += 1;
      }
      if (cell === '⚪') {
        if (count > 0) {
          clues[i].push(count);
        }
        count = 0;
      }
    });

    if (count > 0) {
      clues[i].push(count);
      count = 0;
    }
  });

  return clues;
};
