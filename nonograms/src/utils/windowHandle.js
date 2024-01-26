import state from '../state/state';

export default (e) => {
  const { code } = e;

  if (code === 'KeyS') {
    const game = [...state.game.plot];
    const filter = game
      .map((row) => row.map((cell) => cell.state))
      .filter((row) => row[0] !== '')
      .map((row) => row.filter((cell) => !Number.isFinite(cell)));

    const json = {
      name: '',
      plot: filter,
    };
    console.warn('json', json);
  }

  if (code === 'KeyH') {
    state.game.showCellsValue = !state.game.showCellsValue;
    console.log('trigger', state.game.showCellsValue);
    const opacity = state.game.showCellsValue ? '0.4' : '0';
    state.html.main.style.setProperty('--opacity-cell-text', opacity);
  }
};
