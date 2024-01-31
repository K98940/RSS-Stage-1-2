import createElement from '../../utils/createElement';
import btnCavein from '../buttons/cavein/btnCavein';
import btnLoad from '../buttons/load/btnLoad';
import btnRandom from '../buttons/random/btnRandom.';
import btnReset from '../buttons/reset/btnReset';
import btnSave from '../buttons/save/btnSave';
import './footer.css';

export default () => {
  const footer = createElement({ tag: 'footer', cls: 'footer' });
  const cavein = btnCavein();
  const reset = btnReset();
  const save = btnSave();
  const load = btnLoad();
  const random = btnRandom();

  footer.append(cavein, reset, save, load, random);
  return footer;
};
