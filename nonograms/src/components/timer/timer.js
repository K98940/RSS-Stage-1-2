import state from '../../state/state';
import { createElement } from '../../utils/createNode';
import './timer.css';

export const timer = () => {
  let seconds = parseInt(state.game.timer);
  seconds ||= 0;
  const timerStr = parseTimer(seconds);
  const timer = createElement({ tag: 'div', cls: 'timer', txt: timerStr });
  state.html.timer = timer;
  return timer;
};

export const renderTimer = () => {
  let seconds = parseInt(state.game.timer);
  seconds ||= 0;
  const time = parseTimer(seconds);
  if (state.html.timer.innerText !== time) state.html.timer.innerText = time;
};

export const startTimer = (start = true) => {
  const timerHandler = () => {
    state.game.timer += 1;
    renderTimer();
    return timerHandler;
  };

  clearInterval(state.html.timerID);
  if (start) state.html.timerID = setInterval(timerHandler(), 1000);
  if (!start) {
    state.game.isGameStarted = false;
    renderTimer();
  }
};

export const parseTimer = (seconds) => {
  let hours = Math.trunc(seconds / 3600);
  let minutes = Math.trunc((seconds - hours * 3600) / 60);
  seconds = `${seconds - hours * 3600 - minutes * 60}`;

  hours = hours > 0 ? `${hours}:` : '';
  hours && (hours = hours.padStart(3, '0'));
  minutes = minutes > 0 ? `${minutes}:` : '00:';
  minutes = minutes.padStart(3, '0');
  seconds = seconds.padStart(2, '0');
  return `${hours}${minutes}${seconds}`;
};
