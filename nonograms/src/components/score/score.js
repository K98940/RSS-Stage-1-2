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
  records && state.html.score.append(...records);
};

const clickHandle = () => {
  state.html.scoreH1.textContent = 'SCORE:';
  state.html.score.classList.toggle('score_show');
};

const getContainerRecords = () => {
  const records = getRecords();

  const difficultyList = Object.keys(state.fields);
  const tables = difficultyList.map((dif) => {
    const rec = records.filter((r) => r.difficulty === dif).reverse();
    if (rec.length === 0) return '';
    const container = createElement({ cls: 'container__records' });
    container.append(createElement({ txt: 'игра' }));
    container.append(createElement({ txt: 'сложн.' }));
    container.append(createElement({ txt: 'время' }));
    rec.splice(5);
    const sorted = rec.sort((a, b) => a.timer - b.timer);
    sorted.forEach((r, i) => {
      const style = r.lastGame ? 'record_last-game' : '';
      container.append(
        createElement({ txt: `${i + 1}. ${r.name}`, cls: style })
      );
      container.append(createElement({ txt: r.difficulty, cls: style }));
      container.append(createElement({ txt: parseTimer(r.timer), cls: style }));
    });

    return container;
  });

  resetLastGameFlag(records);
  return tables;
};
