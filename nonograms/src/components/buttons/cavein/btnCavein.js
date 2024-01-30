import state from '../../../state/state';
import createElement from '../../../utils/createElement';
import { startTimer } from '../../timer/timer';
import './btnCavein.css';
const icon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-60q61.013 0 117.506-20.5Q654-181 699-220L220-699q-38 46-59 102.169T140-480q0 142.375 98.812 241.188Q337.625-140 480-140Zm259-121q37-45 59-101.493Q820-418.987 820-480q0-142.375-98.812-241.188Q622.375-820 480-820q-60.662 0-116.831 21Q307-778 261-739l478 478Z"/></svg>`;

export default () => {
  const container = createElement({ cls: 'btn_container' });
  const btn = createElement({
    tag: 'button',
    cls: 'btn_cavein',
    attr: [['title', 'Сдаюсь! Показать решение.']],
  });
  btn.innerHTML = icon;
  btn.addEventListener('click', clickCavein);
  container.append(btn);

  return container;
};

const clickCavein = () => {
  state.game.showCellsValue = true;
  state.game.isGameStarted = false;
  startTimer(false);
  // state.game.timer = 0;
  const opacity = '1';
  state.html.root.style.setProperty('--opacity-cell-text', opacity);
  state.html.main.classList.add('gameover');
};
