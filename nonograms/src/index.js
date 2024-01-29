import './styles/style.css';
import { timer } from './components/timer/timer';
import state from './state/state';
import footer from './components/footer/footer';
import initState from './state/initState';
import renderDesk from './components/plotContainer/renderDesk';
import windowHandle from './utils/windowHandle';
import plotContainer from './components/plotContainer/plotContainer';
import createElement from './utils/createElement';
import createOptions from './utils/createOptions';
import schemeSelector from './components/schemeSelector/schemeSelector';
import { score } from './components/score/score';
import { gameSelector } from './components/gameSelector/gameSelector';

function game() {
  initState();
  console.log(state);
  state.html.main = createElement({ tag: 'main', cls: 'main' });
  state.html.main.append(plotContainer());
  return state.html.main;
}

document.body.classList.add('body');
document.body.append(schemeSelector());
document.body.append(gameSelector());
document.body.append(timer());
document.body.append(game());
document.body.append(footer());
document.body.append(score());
renderDesk(0);
createOptions(state.html.gameSelect, state.fields['5x5']);
window.addEventListener('keypress', windowHandle);
