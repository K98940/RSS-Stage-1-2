import state from '../state/state';

export const startRandomSVGanimation = () => {
  const icons = document.querySelectorAll('svg');
  state.html.icons = icons;

  setInterval(() => {
    const { icons } = state.html;
    const count = state.html.icons.length;
    const random = Math.round(Math.random() * (count - 1));
    icons[random].classList.toggle('animation');
  }, state.game.animeInterval * 1000);
};
