import footer from './components/footer/footer';
import gameSelector from './components/gameSelector/gameSelector';
import plotContainer from './components/plotContainer/plotContainer';
import renderDesk from './components/plotContainer/renderDesk';
import schemeSelector from './components/schemeSelector/schemeSelector';
import { timer } from './components/timer/timer';
import initState from './state/initState';
import state from './state/state';
import './styles/style.css';
import createElement from './utils/createElement';
import createOptions from './utils/createOptions';
import windowHandle from './utils/windowHandle';

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
renderDesk(0);
createOptions(state.html.gameSelect, state.fields['5x5']);
window.addEventListener('keypress', windowHandle);
