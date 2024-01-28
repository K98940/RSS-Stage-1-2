import state from '../../state/state';
import createElement from '../../utils/createElement';
import createOptions from '../../utils/createOptions';
import renderDesk from '../plotContainer/renderDesk';
import './gameSelector.css';

export default () => {
  const changeFilter = (e) => {
    const { value } = e.target;
    const { fields } = state;
    const filters = Object.keys(state.fields);
    const isFilter = filters.includes(value);
    if (isFilter) {
      const listGames = fields[value];
      state.game.currentGame = listGames[0].id;
      createOptions(gameSelect, listGames);
      renderDesk(state.game.currentGame);
    } else {
      state.game.currentGame = value;
      renderDesk(state.game.currentGame);
    }
  };

  const header = createElement({ tag: 'header', cls: 'header' });
  const form = createElement({ tag: 'form', cls: 'form' });
  const gameSelectContainer = createElement({ cls: 'game-select' });

  const fieldSet = createElement({
    tag: 'fieldset',
    cls: 'game-select_fieldset',
  });
  const legend = createElement({
    tag: 'legend',
    cls: 'fieldset_legend',
    txt: 'сложность',
  });

  const gameSelectLabel = createElement({
    tag: 'label',
    txt: 'Выбор игры',
    attr: [['for', 'game-select']],
  });
  const gameSelect = createElement({
    tag: 'select',
    cls: 'game-select_selector',
    attr: [['id', 'game-select']],
  });
  state.html.gameSelect = gameSelect;

  const gameFilterLabel5 = createElement({
    tag: 'label',
    txt: '5x5',
    cls: 'fieldset_label',
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
      ['autofocus', ''],
    ],
  });
  const gameFilterLabel10 = createElement({
    tag: 'label',
    txt: '10x10',
    cls: 'fieldset_label',
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
    cls: 'fieldset_label',
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

  fieldSet.append(
    legend,
    gameFilter5,
    gameFilterLabel5,
    gameFilter10,
    gameFilterLabel10,
    gameFilter15,
    gameFilterLabel15
  );
  form.append(fieldSet, gameSelectContainer);
  header.append(form);
  form.addEventListener('change', changeFilter);
  gameSelectContainer.append(gameSelectLabel, gameSelect);
  return header;
};
