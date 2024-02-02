import { createElement } from '../../utils/createNode';
import { gameSelector } from './gameSelector/gameSelector';
import './header.css';
import muteSound from './muteSound/muteSound';
import schemeSelector from './schemeSelector/schemeSelector';

export default () => {
  createElement;
  const header = createElement({ tag: 'header', cls: 'header' });
  const containerGameOptions = createElement({ cls: 'container-game-options' });
  containerGameOptions.append(schemeSelector());
  containerGameOptions.append(muteSound());

  header.append(containerGameOptions);
  header.append(gameSelector());
  return header;
};
