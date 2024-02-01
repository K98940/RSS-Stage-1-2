import { createElement } from '../../../utils/createNode';
import './cell.css';

export default () => {
  const cell = createElement({ cls: 'cell' });
  return cell;
};
