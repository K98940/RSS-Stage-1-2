import state from '../state/state';

export const getRecords = () => {
  try {
    const data = localStorage.getItem(state.lsKeyRecords);
    const records = JSON.parse(data);
    return records || [];
  } catch (error) {
    console.error(error);
  }
};

export const saveRecords = () => {
  const record = {
    name: state.game.currentGameName,
    difficulty: state.game.difficulty,
    timer: state.game.timer,
    lastGame: true,
  };

  const oldRecords = getRecords();
  const newRecords = [...oldRecords, record];
  const data = JSON.stringify(newRecords);
  localStorage.setItem(state.lsKeyRecords, data);
};

export const resetLastGameFlag = (records) => {
  const woFlag = records.map((r) => ({ ...r, lastGame: false }));
  const data = JSON.stringify(woFlag);
  localStorage.setItem(state.lsKeyRecords, data);
};
