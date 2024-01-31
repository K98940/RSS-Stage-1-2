import state from '../../../state/state';
import createElement from '../../../utils/createElement';
import { switchGame } from '../../gameSelector/gameSelector';
import renderDesk from '../../plotContainer/renderDesk';
import { startTimer } from '../../timer/timer';
import svg from '../../../assets/icons/random.svg';
import './btnRandom.css';

export default () => {
  const button = createElement({
    tag: 'button',
    txt: 'Random game',
    cls: 'button btn-random-game',
    icon: svg,
  });
  button.addEventListener('click', randomGame);

  return button;
};

const randomGame = () => {
  let countGames = 0;
  const { fields } = state;

  for (const field in fields) {
    countGames += fields[field]?.length || 0;
  }

  const randomID = Math.round(Math.random() * (countGames - 1));
  const error = 'randomID должен быть меньше countGames';
  console.assert(randomID < countGames, { randomID, countGames, error });

  state.game.currentGame = randomID;
  renderDesk(randomID);
  switchGame(randomID);
  state.game.timer = 0;
  startTimer(false);
};
