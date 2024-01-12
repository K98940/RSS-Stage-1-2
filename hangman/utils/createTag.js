export const createTag = ({
  tag,
  classList = '',
  attr = '',
  attrValue = '',
  innerText = '',
  src = '',
}) => {
  if (!tag) {
    console.warn('invalid call createTag, <tag> name not provided');
    return;
  }
  const element = document.createElement(tag);
  classList && (element.classList = classList);
  attr && element.setAttribute(attr, attrValue);
  innerText && (element.innerText = innerText);
  src && (element.src = src);
  return element;
};
