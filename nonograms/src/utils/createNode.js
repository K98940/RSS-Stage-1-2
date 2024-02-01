export const createElement = ({
  tag = 'div',
  cls = '',
  txt = '',
  attr = [],
  icon = null,
}) => {
  const element = document.createElement(tag);

  if (icon) {
    const svg = document.createElement('svg');
    svg.innerHTML = icon;

    const span = document.createElement('span');
    span.textContent = txt;

    element.append(svg, span);
  } else {
    element.innerText = txt;
  }

  cls && (element.className = cls);
  attr.forEach((attribut) => element.setAttribute(attribut[0], attribut[1]));
  return element;
};

export const createButton = ({
  cls = '',
  icon = null,
  txt = '',
  attr = [],
}) => {
  const container = createElement({ cls: `button-container ${cls}` });
  const button = createElement({ tag: 'button', cls: 'button', attr: attr });

  if (icon) {
    const svg = createElement({ tag: 'svg', cls: 'button_icon' });
    svg.innerHTML = icon;
    button.append(svg);
  }

  if (txt) {
    const span = createElement({ tag: 'span', cls: 'button_span', txt: txt });
    button.append(span);
  }

  container.append(button);
  return container;
};
