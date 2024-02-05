import './schemeSelector.css';
import colorSchemes from '../../../assets/schemes/colorSchemes';
import { createElement } from '../../../utils/createNode';

export default () => {
  createElement;
  let options = [];
  const container = createElement({ cls: 'scheme-container' });
  const label = createElement({
    tag: 'label',
    txt: 'color theme',
    attr: [['for', 'scheme_select']],
  });
  const select = createElement({
    tag: 'select',
    cls: 'scheme-select',
    attr: [['id', 'scheme_select']],
  });

  colorSchemes.forEach((scheme) =>
    options.push(
      createElement({
        tag: 'option',
        txt: scheme.title,
        attr: [['value', scheme.name]],
      })
    )
  );

  select.addEventListener('change', changeScheme);
  select.append(...options);
  container.append(label, select);
  return container;
};

const changeScheme = (e) => {
  const { value } = e.target;
  const scheme = colorSchemes.filter((s) => s.name === value);
  applyScheme(scheme);
};

const applyScheme = (scheme) => {
  if (!scheme) return;

  const root = document.querySelector(':root');

  const colors = scheme[0].colors;
  const keys = Object.keys(colors);
  keys.forEach((color) => {
    root.style.setProperty(`--${color}`, colors[color]);
  });
};
