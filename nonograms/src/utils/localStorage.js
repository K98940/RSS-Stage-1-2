import { switchGame } from '../components/header/gameSelector/gameSelector';
import { updateDesk } from '../components/plotContainer/renderDesk';
import { startTimer } from '../components/timer/timer';
import svg_cross from '../assets/icons/cross.svg';
import svg_fill from '../assets/icons/fill.svg';

import state from '../state/state';

export const saveState = () => {
  const { game } = state;
  localStorage.setItem(state.lsKeyState, JSON.stringify(game));
};

export const loadState = () => {
  try {
    const ls = localStorage.getItem(state.lsKeyState);
    const game = JSON.parse(ls);
    if (game) {
      state.game = game;
      updateDesk();
      switchGame(state.game.currentGame);
      startTimer(true);
      const opacity = state.game.showCellsValue ? '0.4' : '0';
      state.html.main.style.setProperty('--opacity-cell-text', opacity);

      if (state.game.brush === 'fill') {
        state.html.iconBrushMode.innerHTML = svg_fill;
      } else state.html.iconBrushMode.innerHTML = svg_cross;
    }
  } catch (error) {
    console.error('ошибка при загрузке игры из секректного хранилища:', error);
    return;
  }
};
