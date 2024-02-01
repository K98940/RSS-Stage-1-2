import state from '../../../state/state';
import { createElement } from '../../../utils/createNode';
import svg_cross from '../../../assets/icons/cross.svg';
import svg_fill from '../../../assets/icons/fill.svg';
import svgBrush from '../../../assets/icons/brush.svg';
import './btnSwitchMode.css';

export default () => {
  const container = createElement({
    tag: 'button',
    cls: 'button btn-switch-container',
    attr: [['title', 'переключить действие по ЛКМ']],
  });
  const icon = createElement({ tag: 'svg' });
  icon.innerHTML = svgBrush;
  container.append(icon);

  const span = createElement({ tag: 'span', txt: 'switch brush' });
  container.append(span);

  const iconBrushMode = createElement({ tag: 'svg' });
  iconBrushMode.innerHTML = svg_fill;
  state.html.iconBrushMode = iconBrushMode;

  container.append(iconBrushMode);
  container.addEventListener('click', switchBrushMode);

  return container;
};

const switchBrushMode = () => {
  const { brush } = state.game;

  switch (brush) {
    case 'fill':
      state.game.brush = 'cross';
      state.html.iconBrushMode.innerHTML = svg_cross;
      break;
    case 'cross':
      state.game.brush = 'fill';
      state.html.iconBrushMode.innerHTML = svg_fill;
      break;
  }
};
