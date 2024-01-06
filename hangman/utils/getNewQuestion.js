import { state } from './loadConfig.js';

export const getNewQuestion = () => {
  const { questions } = state;
  const count = questions?.length || 0;
  if (count === 0) {
    console.warn('empty list of the words');
    return;
  }
  const RandomIndex = Math.floor(Math.random() * count);
  return state.questions[RandomIndex];
};
