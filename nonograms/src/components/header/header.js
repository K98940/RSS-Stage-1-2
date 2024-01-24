import createElement from '../../utils/createElement';
import './header.css';

export default () => {
  const header = createElement({ tag: 'header', cls: 'header' });
  return header;
};
