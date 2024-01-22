import plotContainer from './components/plotContainer/plotContainer';
import initState from './state/initState';
import state from './state/state';
import './styles/style.css';

function game() {
  initState();
  const plot = plotContainer();
  console.log(state);
  return plot;
}

document.body.appendChild(game());
