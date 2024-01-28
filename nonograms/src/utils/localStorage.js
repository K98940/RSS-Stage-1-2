import { updateDesk } from '../components/plotContainer/renderDesk';
import { startTimer } from '../components/timer/timer';
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
      startTimer(false);
      updateDesk();
      const opacity = state.game.showCellsValue ? '0.4' : '0';
      state.html.main.style.setProperty('--opacity-cell-text', opacity);
    }
  } catch (error) {
    console.error('ошибка при загрузке игры из секректного хранилища:', error);
    return;
  }
};
