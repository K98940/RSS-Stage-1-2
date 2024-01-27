import createElement from './createElement';

export default (select, games) => {
  const options = games.map((game) => {
    const { length } = game.name;
    const MAX_LENGTH = 30;
    const nameNormalized =
      length > MAX_LENGTH ? game.name.slice(0, MAX_LENGTH) + '...' : game.name;
    return createElement({
      tag: 'option',
      attr: [['value', game.id]],
      txt: nameNormalized,
    });
  });
  select.innerHTML = '';
  select.append(...options);
};
