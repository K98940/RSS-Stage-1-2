import state from '../../../state/state';
import createElement from '../../../utils/createElement';
import './btnSwitchMode.css';

const svgIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M437-80q-24 0-42-17.625T377-140v-200H220q-24 0-42-18t-18-42v-303q0-55 39.656-96T295-840h505v440q0 24-18 42t-42 18H583v200q0 24.75-18 42.375T523-80h-86ZM220-554h520v-226h-56v171h-60v-171h-71v85h-60v-85H295q-32 0-53.5 23T220-703v149Zm0 154h520v-94H220v94Zm0 0v-94 94Z"/></svg>';
const svg_fill =
  '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M264-264h432v-432H264v432Zm-84 144q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"/></svg>';
const svg_cross =
  '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>';

export default () => {
  const container = createElement({
    tag: 'button',
    cls: 'button btn-switch-container',
    attr: [['title', 'переключить действие по ЛКМ']],
  });
  const icon = createElement({ tag: 'svg' });
  icon.innerHTML = svgIcon;
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
