import { createButton } from '../../../utils/createNode';
import { loadState } from '../../../utils/localStorage';
import svg from '../../../assets/icons/load.svg';
import './btnLoad.css';

export default () => {
  const btnLoad = createButton({
    txt: 'Continue last game',
    icon: svg,
  });
  btnLoad.addEventListener('click', loadState);
  return btnLoad;
};
