import './plotContainer.css';
import state from '../../state/state';
import { createElement } from '../../utils/createNode';
import { startTimer } from '../timer/timer';
// import { parseTimer, startTimer } from '../timer/timer';
import soundFillCell from './sound/soundFillCell.mp3';
import soundFillCross from './sound/soundFillCross.mp3';
import soundClear from './sound/soundClear.mp3';
import soundWin from './sound/win.mp3';
import { saveRecords } from '../../utils/gameRecord';
import { updateScore } from '../score/score';
import { updateDesk } from './renderDesk';
const sndFillCell = new Audio(soundFillCell);
const sndFillCross = new Audio(soundFillCross);
const sndClear = new Audio(soundClear);
const sndWin = new Audio(soundWin);
state.html.sounds = [];
state.html.sounds.push(sndFillCell, sndFillCross, sndClear, sndWin);

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
    startTimer();
  }
};

const getClickedCell = (target) => {
  const { plot } = state.game;
  let index = null;
  const cell = plot.flat(1).filter((cell, i) => {
    if (cell.element === target) {
      index = i;
      return true;
    }
  })[0];

  return { cell, index };
};

const contextMenuHandler = (e) => {
  e.preventDefault();
  const { cell: clickedCell, index } = getClickedCell(e.target);
  if (clickedCell) {
    const cellState = clickedCell.state;
    if (Number.isFinite(cellState)) {
      markX(clickedCell, index, false);
      return;
    }

    checkGameStart();
    switch (cellState) {
      case '⚪':
        sndFillCross.play();
        clickedCell.state = 'x';
        break;
      case '⚫':
        sndFillCross.play();
        clickedCell.state = 'x';
        break;
      case 'x':
        sndClear.play();
        clickedCell.state = '⚪';
        break;
    }

    clickedCell.element.classList.toggle('cell_checked');
    clickedCell.element.classList.remove('cell_fill');
  }
};

const clickHandler = (e) => {
  const { brush } = state.game;
  const { cell: clickedCell, index } = getClickedCell(e.target);

  const drawFill = () => {
    sndFillCell.play();
    clickedCell.state = '⚫';
    clickedCell.element.classList.add('cell_fill');
    clickedCell.element.classList.remove('cell_checked');
  };
  const drawCross = () => {
    sndFillCross.play();
    clickedCell.state = 'x';
    clickedCell.element.classList.toggle('cell_checked');
    clickedCell.element.classList.remove('cell_fill');
  };
  const drawEmpty = () => {
    sndClear.play();
    clickedCell.state = '⚪';
    clickedCell.element.classList.remove('cell_fill');
    clickedCell.element.classList.remove('cell_checked');
  };

  if (clickedCell) {
    const cellState = clickedCell.state;
    if (Number.isFinite(cellState)) {
      markX(clickedCell, index);
      return;
    }

    checkGameStart();
    switch (cellState) {
      case '⚪':
        if (brush === 'fill') {
          drawFill();
        } else drawCross();
        break;
      case '⚫':
        if (brush === 'fill') {
          drawEmpty();
        } else drawCross();
        break;
      case 'x':
        if (brush === 'fill') {
          drawFill();
        } else drawEmpty();
        break;
    }

    if (isAllCorrectChecked()) setTimeout(() => gameOver(), 0);
  }
};

const markX = (cell, indexCell, setMark = true) => {
  const length = state.game.plot[0].length;
  let rowClicked = -1;
  let x = 0;
  while (x <= indexCell) {
    rowClicked += 1;
    x += length;
  }
  const columnCliked = indexCell - length * rowClicked;

  state.game.plot.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      switch (setMark) {
        case true:
          if (
            (columnCliked === columnIndex || rowClicked === rowIndex) &&
            cell.state === '⚪'
          )
            cell.state = 'x';
          break;
        case false:
          if (
            (columnCliked === columnIndex || rowClicked === rowIndex) &&
            cell.state === 'x'
          )
            cell.state = '⚪';
          break;
      }
    });
  });
  updateDesk();
};

const isAllCorrectChecked = () => {
  const { plot } = state.game;
  const plotWithoutX = plot.flat(1).map((cell) => {
    if (cell.state === 'x') return { ...cell, state: '⚪' };
    return cell;
  });
  return !plotWithoutX.some((cell) => cell.state !== cell.value);
};

const gameOver = () => {
  sndWin.play();
  const msg = `Great! You have solved the nonogram in ${state.game.timer} seconds!`;
  // const msg = `Great! You have solved the nonogram in ${parseTimer(
  //   state.game.timer
  // )} seconds!`;
  saveRecords();
  updateScore(msg);
  state.html.score.classList.add('score_show');

  // state.game.timer = 0;
  state.html.main.classList.add('gameover');
  startTimer(false);
};
