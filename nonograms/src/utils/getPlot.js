import state from '../state/state';

export default (id) => {
  const ID = Number(id);
  for (let field in state.fields) {
    const game = state.fields[field].filter((game) => game.id === ID)[0];
    if (game) {
      state.game.currentGame = game.id;
      state.game.currentGameName = game.name;
      return game.plot;
    }
  }
  return null;
};
