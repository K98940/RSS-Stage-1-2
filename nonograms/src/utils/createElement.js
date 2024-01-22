export default ({ tag = 'div', cls = '' }) => {
  const element = document.createElement(tag);
  element.className = cls;

  return element;
};
