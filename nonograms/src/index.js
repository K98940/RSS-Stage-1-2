import './styles/style.css';
import { timer } from './components/timer/timer';
import state from './state/state';
import footer from './components/footer/footer';
import initState from './state/initState';
import renderDesk from './components/plotContainer/renderDesk';
import windowHandle from './utils/windowHandle';
import plotContainer from './components/plotContainer/plotContainer';
import { createElement } from './utils/createNode';
import createOptions from './utils/createOptions';
import { score } from './components/score/score';
import btnSwitchMode from './components/buttons/mode/btnSwitchMode';
import { startRandomSVGanimation } from './utils/animation';
import header from './components/header/header';
import showWelcome from './utils/showWelcome';

function game() {
  initState();
  state.html.main = createElement({ tag: 'main', cls: 'main' });
  state.html.main.append(plotContainer());
  state.html.main.append(btnSwitchMode());
  state.html.root = document.querySelector(':root');
  return state.html.main;
}

document.body.classList.add('body');
document.body.append(header());
document.body.append(timer());
document.body.append(game());
document.body.append(footer());
document.body.append(score());
renderDesk(0);
createOptions(state.html.gameSelect, state.fields['5x5']);
startRandomSVGanimation();
window.addEventListener('keypress', windowHandle);
showWelcome();

// добавить favicon
// Добавить сообщения
