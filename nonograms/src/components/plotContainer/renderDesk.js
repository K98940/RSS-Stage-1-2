import state from '../../state/state';
import rotateMatrix from '../../utils/rotateMatrix';
import newCell from './cell/newCell';

const getPlot = (id) => {
  const ID = Number(id);
  for (let field in state.fields) {
    const game = state.fields[field].filter((game) => game.id === ID)[0];
    if (game) return game.plot;
  }
  return null;
};

export default (id = 0) => {
  const plot = [...getPlot(id)];
  if (!plot) {
    return;
  }

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
  const columnsCount = gameDesk[0].length;

  //сформируем элементы игрового поля
  state.html.plotContainer.innerHTML = '';
  gameDesk.forEach((row, i) => {
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

      state.html.plotContainer.appendChild(cell);
    });
  });

  setBorders(gameDesk);
  state.game.plot = gameDesk;
  state.html.plotContainer.style.setProperty('--columns-count', columnsCount);
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

const setBorders = (matrix) => {
  let indexRow = 0;

  for (let row = 0; row < matrix.length; row += 1) {
    let indexCol = 0;
    const lastIndexRow = matrix[row].length - 1;
    const lastElemRow = matrix[row][lastIndexRow].value;
    if (lastElemRow === '⚫' || lastElemRow === '⚪') indexRow += 1;

    for (let col = 0; col < matrix[row].length; col += 1) {
      const lastRowIndex = matrix.length - 1;
      const lastElemCol = matrix[lastRowIndex][col].value;
      if (lastElemCol === '⚫' || lastElemCol === '⚪') {
        indexCol += 1;
      }

      if (indexRow && indexRow === 1)
        matrix[row][col].element.setAttribute('first-row', '');
      if (indexRow && indexRow % 5 === 0)
        matrix[row][col].element.setAttribute('row', '');
      if (indexCol && indexCol === 1)
        matrix[row][col].element.setAttribute('first-col', '');
      if (indexCol && indexCol % 5 === 0)
        matrix[row][col].element.setAttribute('col', '');
    }
  }
};
