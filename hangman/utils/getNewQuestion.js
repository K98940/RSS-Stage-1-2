import { state } from './loadConfig.js';

export const getNewQuestion = () => {
  const count = state.questions?.length || 0;
  if (count === 0) {
    console.warn('The word list is over. New loop.');
    state.questions = state.questionsPast;
    state.questionsPast = [];
  }

  const RandomIndex = Math.floor(Math.random() * count);
  const secretWord = state.questions.splice(RandomIndex, 1)[0];
  state.questionsPast.push(secretWord);

  console.warn('RandomIndex', RandomIndex);
  console.warn('secretWord', secretWord);

  return secretWord;
};
