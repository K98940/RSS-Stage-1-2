import state from './state';
import field5x5 from '../fields/5x5.json';
import field10x10 from '../fields/10x10.json';
import field15x15 from '../fields/15x15.json';

export default () => {
  const fields = getFields();
  Object.assign(state, {
    ...state,
    game: {},
    // game: field5x5[0],
    fields: fields,
  });
};

const getFields = () => {
  return {
    '5x5': field5x5,
    '10x10': field10x10,
    '15x15': field15x15,
  };
};
