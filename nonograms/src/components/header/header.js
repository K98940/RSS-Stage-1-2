import state from '../../state/state';
import createElement from '../../utils/createElement';
import './header.css';

export default () => {
  const changeFilter = (e) => {
    const { value } = e.target;
    const { fields } = state;
    const filters = Object.keys(state.fields);
    const isFilter = filters.includes(value);
    if (isFilter) {
      const listGames = fields[value];
      const options = listGames.map((game) =>
        createElement({
          tag: 'option',
          attr: [['value', game.id]],
          txt: game.name,
        })
      );
      gameSelect.innerHTML = '';
      gameSelect.append(...options);

      console.log(gameSelect);
    } else {
    }
  };

  const header = createElement({ tag: 'header', cls: 'header' });
  const form = createElement({ tag: 'form' });
  const gameSelectContainer = createElement({ cls: 'game-select' });

  const gameSelectLabel = createElement({
    tag: 'label',
    txt: 'Выбор игры',
    attr: [['for', 'game-select']],
  });
  const gameSelect = createElement({
    tag: 'select',
    attr: [['id', 'game-select']],
  });

  const gameFilterLabel5 = createElement({
    tag: 'label',
    txt: '5x5',
    attr: [['for', 'game-filter-5x5']],
  });
  const gameFilter5 = createElement({
    tag: 'input',
    attr: [
      ['type', 'radio'],
      ['name', 'game-filter'],
      ['value', '5x5'],
      ['id', 'game-filter-5x5'],
      ['checked', ''],
    ],
  });
  const gameFilterLabel10 = createElement({
    tag: 'label',
    txt: '10x10',
    attr: [['for', 'game-filter-10x10']],
  });
  const gameFilter10 = createElement({
    tag: 'input',
    attr: [
      ['type', 'radio'],
      ['name', 'game-filter'],
      ['value', '10x10'],
      ['id', 'game-filter-10x10'],
    ],
  });
  const gameFilterLabel15 = createElement({
    tag: 'label',
    txt: '15x15',
    attr: [['for', 'game-filter-15x15']],
  });
  const gameFilter15 = createElement({
    tag: 'input',
    attr: [
      ['type', 'radio'],
      ['name', 'game-filter'],
      ['value', '15x15'],
      ['id', 'game-filter-15x15'],
    ],
  });

  gameSelectContainer.addEventListener('change', changeFilter);
  gameSelectContainer.append(
    gameSelectLabel,
    gameSelect,
    gameFilterLabel5,
    gameFilter5,
    gameFilterLabel10,
    gameFilter10,
    gameFilterLabel15,
    gameFilter15
  );
  form.append(gameSelectContainer);
  header.append(form);
  return header;
};
