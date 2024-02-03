import { switchGame } from '../components/header/gameSelector/gameSelector';
import { updateDesk } from '../components/plotContainer/renderDesk';
import { showNotice } from '../components/notice/showNotice';
import { startTimer } from '../components/timer/timer';
import svg_cross from '../assets/icons/cross.svg';
import svg_fill from '../assets/icons/fill.svg';
import state from '../state/state';

export const saveState = () => {
  const { game } = state;
  localStorage.setItem(state.lsKeyState, JSON.stringify(game));
  if (isSavedGame()) {
    state.html.btnLoad.classList.remove('button_disabled');
    showNotice('Игра сохранена');
  } else {
    state.html.btnLoad.classList.add('button_disabled');
    showNotice('Игра не сохранена', true);
  }
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
      state.html.root.style.setProperty('--opacity-cell-text', opacity);

      if (state.game.brush === 'fill') {
        state.html.iconBrushMode.innerHTML = svg_fill;
      } else state.html.iconBrushMode.innerHTML = svg_cross;
      showNotice('Игра загружена');
    } else {
      state.html.btnLoad.classList.add('button_disabled');
      showNotice('Нет сохранённых игр', true);
    }
  } catch (error) {
    console.error('ошибка при загрузке игры из localStorage:', error);
    return;
  }
};

export const isSavedGame = () => {
  try {
    const ls = localStorage.getItem(state.lsKeyState);
    const game = JSON.parse(ls);
    if (game) return true;
  } catch (error) {
    console.error('ошибка при загрузке игры из localStorage:', error);
    return false;
  }

  return false;
};
