import { Main } from '/hangman/components/main/Main.js';
import { loadConfig } from '/hangman/utils/loadConfig.js';
import { initGame } from '/hangman/utils/initGame.js';

const ConfigPath = '/hangman/config/config.json';
const body = document.querySelector('body');

loadConfig(ConfigPath);
initGame();
body.prepend(Main());
