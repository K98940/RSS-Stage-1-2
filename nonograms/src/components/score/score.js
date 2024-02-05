import state from '../../state/state';
import { createElement } from '../../utils/createNode';
import { getRecords, resetLastGameFlag } from '../../utils/gameRecord';
import { parseTimer } from '../timer/timer';
import './score.css';

export const score = () => {
  const dialog = createElement({
    tag: 'dialog',
    cls: 'dialog',
    attr: [['open', '']],
  });
  const container = createElement({
    cls: 'container',
  });
  state.html.score = container;
  updateScore();
  dialog.addEventListener('click', clickHandle);
  dialog.append(container);
  return dialog;
};

export const updateScore = (msg) => {
  state.html.score.innerHTML = '';
  const title = msg ? msg : 'SCORE:';
  const h1 = createElement({ tag: 'h1', cls: 'score_h1', txt: title });
  state.html.score.append(h1);
  state.html.scoreH1 = h1;
  const records = getContainerRecords();
  if (records) {
    const footer = createElement({ tag: 'footer', cls: 'score-footer' });
    const icon = createElement({ tag: 'span', cls: 'score-footer__icon' });
    const text = createElement({
      tag: 'span',
      cls: 'score-footer__text',
      txt: 'last saved game',
    });
    footer.append(icon, text);
    state.html.score.append(records);
    state.html.score.append(footer);
  }
};

const clickHandle = () => {
  state.html.scoreH1.textContent = 'SCORE:';
  state.html.score.classList.toggle('score_show');
};

const getContainerRecords = () => {
  const records = getRecords();
  if (records.length === 0) return '';

  const lastGames = [...records];
  lastGames.sort((a, b) => b.id - a.id).splice(5);
  lastGames.sort((a, b) => a.timer - b.timer);

  const container = createElement({ cls: 'container__records' });
  container.append(createElement({ txt: 'Title' }));
  container.append(createElement({ txt: 'Size' }));
  container.append(createElement({ txt: 'Time 🛆' }));

  lastGames.forEach((record, i) => {
    const style = record.lastGame ? 'record_last-game' : '';
    container.append(
      createElement({ txt: `${i + 1}. ${record.name}`, cls: style })
    );
    container.append(createElement({ txt: record.difficulty, cls: style }));
    container.append(
      createElement({ txt: parseTimer(record.timer), cls: style })
    );
  });

  resetLastGameFlag(records);
  return container;
};
