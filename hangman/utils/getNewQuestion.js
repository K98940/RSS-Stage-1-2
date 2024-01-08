import { createModal } from '../components/modal/modal.js';
import { state } from './loadConfig.js';

export const getNewQuestion = () => {
  const { questions } = state;
  const count = questions?.length || 0;
  if (count === 0) {
    console.warn('empty list of the words');
    return;
  }
  const RandomIndex = Math.floor(Math.random() * count);
  return questions[RandomIndex];
};

// TODO: if count === 0 => createModal('empty list of the words')
// else
//    wordPast = splice(questions[RandomIndex], 1)
//    обновить UI counters (questions remain and correct answers)
