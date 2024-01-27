import createElement from '../../utils/createElement';
import btnLoad from '../buttons/load/btnLoad';
import btnReset from '../buttons/reset/btnReset';
import btnSave from '../buttons/save/btnSave';
import './footer.css';

export default () => {
  const footer = createElement({ tag: 'footer', cls: 'footer' });
  const reset = btnReset();
  const save = btnSave();
  const load = btnLoad();

  footer.append(reset, save, load);
  return footer;
};
