import createElement from '../../utils/createElement';
import btnLoad from '../buttons/load/btnLoad';
import btnRandom from '../buttons/random/btnRandom.';
import btnReset from '../buttons/reset/btnReset';
import btnSave from '../buttons/save/btnSave';
import './footer.css';

export default () => {
  const footer = createElement({ tag: 'footer', cls: 'footer' });
  const reset = btnReset();
  const save = btnSave();
  const load = btnLoad();
  const random = btnRandom();

  footer.append(reset, save, load, random);
  return footer;
};
