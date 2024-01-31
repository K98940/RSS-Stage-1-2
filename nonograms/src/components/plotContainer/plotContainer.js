import './plotContainer.css';
import state from '../../state/state';
import createElement from '../../utils/createElement';
import { parseTimer, startTimer } from '../timer/timer';
import soundFillCell from './sound/soundFillCell.mp3';
import soundFillCross from './sound/soundFillCross.mp3';
import soundClear from './sound/soundClear.mp3';
import { saveRecords } from '../../utils/gameRecord';
import { updateScore } from '../score/score';
const sndFillCell = new Audio(soundFillCell);
const sndFillCross = new Audio(soundFillCross);
const sndClear = new Audio(soundClear);

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
  return plot.flat(1).filter((cell) => cell.element === target)[0];
};

const contextMenuHandler = (e) => {
  e.preventDefault();
  const clickedCell = getClickedCell(e.target);
  if (clickedCell) {
    const cellState = clickedCell.state;
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
    checkGameStart();
  }
};

const clickHandler = (e) => {
  const { brush } = state.game;
  const clickedCell = getClickedCell(e.target);

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
    checkGameStart();
  };
  const drawEmpty = () => {
    sndClear.play();
    clickedCell.state = '⚪';
    clickedCell.element.classList.remove('cell_fill');
    clickedCell.element.classList.remove('cell_checked');
  };

  if (clickedCell) {
    const cellState = clickedCell.state;
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

    checkGameStart();
    if (isAllCorrectChecked()) setTimeout(() => gameOver(), 0);
  }
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
  const msg = `Great! You have solved the nonogram in ${parseTimer(
    state.game.timer
  )} seconds!`;
  saveRecords();
  updateScore(msg);
  state.html.score.classList.add('score_show');

  state.game.timer = 0;
  state.html.main.classList.add('gameover');
  startTimer(false);
};
