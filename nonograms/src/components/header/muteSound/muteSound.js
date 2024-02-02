import { createElement } from '../../../utils/createNode';
import './muteSound.css';
import svgSoundOn from '../../../assets/icons/sound-on.svg';
import svgSoundOFF from '../../../assets/icons/sound-off.svg';
import state from '../../../state/state';

let initVolume = state.game.soundVolume;

export default () => {
  const container = createElement({ cls: 'container-mute' });
  const sound = createElement({ tag: 'svg' });
  state.html.soundIcon = sound;
  sound.innerHTML = svgSoundOn;

  container.addEventListener('click', muteSoundClick);
  container.append(sound);
  return container;
};

const muteSoundClick = () => {
  const { soundVolume: volume } = state.game;

  if (volume > 0) {
    state.game.soundVolume = 0;
    state.html.soundIcon.innerHTML = svgSoundOFF;
    console.log('state.html.sounds', state.html.sounds);
    state.html.sounds.forEach((sound) => (sound.volume = 0));
  }
  if (volume === 0) {
    state.game.soundVolume = initVolume;
    state.html.soundIcon.innerHTML = svgSoundOn;
    state.html.sounds.forEach((sound) => (sound.volume = initVolume));
  }
};
