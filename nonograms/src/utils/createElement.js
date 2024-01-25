export default ({ tag = 'div', cls = '', txt = '', attr = [] }) => {
  const element = document.createElement(tag);
  cls && (element.className = cls);
  element.innerText = txt;
  attr.forEach((attribut) => element.setAttribute(attribut[0], attribut[1]));

  return element;
};
