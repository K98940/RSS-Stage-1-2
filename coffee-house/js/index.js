import { initBurgerMenu } from './burger.js';
import { initMenu } from './menu.js';
import { Slider } from '../components/slider/slider.js';

const sliderContainer = document.querySelector('.slider');

initBurgerMenu();
new Slider({
  container: sliderContainer,
  sensitive: 20,
  direction: 'left',
  autoslide: true,
  animationDuration: '5s',
});
initMenu();