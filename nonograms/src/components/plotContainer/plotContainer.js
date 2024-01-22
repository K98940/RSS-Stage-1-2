import state from '../../state/state';
import createElement from '../../utils/createElement';
import newCell from './cell/newCell';
import './plotContainer.css';

export default () => {
  const { plot } = state.game;
  const container = createElement({ tag: 'div', cls: 'container' });
  console.log(plot);
  plot.forEach((row) =>
    row.forEach((el) => {
      const cell = newCell();
      container.appendChild(cell);
    })
  );

  return container;
};
