import state from '../../state/state';
import createElement from '../../utils/createElement';
import { getRecords, resetLastGameFlag } from '../../utils/gameRecord';
import { parseTimer } from '../timer/timer';
import './score.css';

export const score = () => {
  const container = createElement({ cls: 'container' });
  state.html.score = container;
  updateScore();
  container.addEventListener('click', clickHandle);
  return container;
};

export const updateScore = () => {
  state.html.score.innerHTML = '';
  const records = getContainerRecords();
  records && state.html.score.append(...records);
};

const clickHandle = () => {
  state.html.score.classList.toggle('score_show');
};

const getContainerRecords = () => {
  const records = getRecords();
  // if (!records) return null;

  const difficultyList = Object.keys(state.fields);
  console.log('difficultyList', difficultyList);
  const tables = difficultyList.map((dif, i) => {
    const rec = records.filter((r) => r.difficulty === dif);
    if (rec.length === 0 && i > 0) return '';
    console.log('rec', rec);
    const container = createElement({ cls: 'container__records' });
    container.append(createElement({ txt: 'игра' }));
    container.append(createElement({ txt: 'сложн.' }));
    container.append(createElement({ txt: 'время' }));
    const sorted = rec.sort((a, b) => a.timer - b.timer);
    sorted.splice(5);
    sorted.forEach((r) => {
      const style = r.lastGame ? 'record_last-game' : '';
      container.append(createElement({ txt: r.name, cls: style }));
      container.append(createElement({ txt: r.difficulty, cls: style }));
      container.append(createElement({ txt: parseTimer(r.timer), cls: style }));
    });

    return container;
  });

  resetLastGameFlag(records);
  return tables;
};
