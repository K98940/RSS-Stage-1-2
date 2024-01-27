import createElement from '../../../utils/createElement';
import { loadState } from '../../../utils/localStorage';
import './btnLoad.css';

export default () => {
  const btnLoad = createElement({ tag: 'button', txt: 'Continue last game' });
  btnLoad.addEventListener('click', loadState);
  return btnLoad;
};
