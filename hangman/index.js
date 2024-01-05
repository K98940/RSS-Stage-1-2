import { Main } from './components/main/Main.js';
import { loadConfig } from './utils/loadConfig.js';
import { initGame } from './utils/initGame.js';

const ConfigPath = './config/config.json';
const body = document.querySelector('body');

await loadConfig(ConfigPath);
initGame();
body.prepend(Main());
