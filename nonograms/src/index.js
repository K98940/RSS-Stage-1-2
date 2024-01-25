import header from './components/header/header';
import plotContainer from './components/plotContainer/plotContainer';
import renderDesk from './components/plotContainer/renderDesk';
import initState from './state/initState';
import state from './state/state';
import './styles/style.css';
import createElement from './utils/createElement';
import createOptions from './utils/createOptions';

function game() {
  initState();
  console.log(state);
  const main = createElement({ tag: 'main', cls: 'main' });
  main.append(plotContainer());
  return main;
}

document.body.classList.add('body');
document.body.append(header());
document.body.append(game());
renderDesk(0);
createOptions(state.html.gameSelect, state.fields['5x5']);
