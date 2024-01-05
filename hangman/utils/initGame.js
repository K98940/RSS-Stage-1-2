import { state } from './loadConfig.js';
import { getNewQuestion } from './getNewQuestion.js';

export const initGame = () => {
  state.newQuestion = getNewQuestion();
};
