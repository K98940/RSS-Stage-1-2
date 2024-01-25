import createElement from './createElement';

export default (select, games) => {
  const options = games.map((game) =>
    createElement({
      tag: 'option',
      attr: [['value', game.id]],
      txt: game.name,
    })
  );
  select.innerHTML = '';
  select.append(...options);
};
