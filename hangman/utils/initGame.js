import { state } from './loadConfig.js';
import { getNewQuestion } from './getNewQuestion.js';

export const initGame = () => {
  state.newQuestion = getNewQuestion();
  state.incorrectGuesses = 0;
  state.keyPressed = [];
};
