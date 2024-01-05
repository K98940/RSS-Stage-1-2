import { Main } from './components/main/Main.js';
import { loadConfig } from './utils/loadConfig.js';
import { initGame } from './utils/initGame.js';
import { keyPress } from './handles/keyPress.js';

const ConfigPath = './config/config.json';
const body = document.querySelector('body');

await loadConfig(ConfigPath);
initGame();
body.prepend(Main());

window.addEventListener('keypress', keyPress);
const virtualKeyboard = document.querySelector('.virtual-keyboard');
virtualKeyboard && virtualKeyboard.addEventListener('click', keyPress);
