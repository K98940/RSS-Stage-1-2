import createElement from '../../../utils/createElement';
import { loadState } from '../../../utils/localStorage';
import svg from '../../../assets/icons/load.svg';
import './btnLoad.css';

export default () => {
  const btnLoad = createElement({
    tag: 'button',
    txt: 'Continue last game',
    cls: 'button btn-load',
    icon: svg,
  });
  btnLoad.addEventListener('click', loadState);
  return btnLoad;
};
