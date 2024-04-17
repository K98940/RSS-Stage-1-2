import { State } from '../../../types/types';
import { isState } from '../../../utils/predicates';

const SESSION_KEY = '20240417180658';

export const session = {
  read(): State | undefined {
    try {
      const sessionData = sessionStorage.getItem(SESSION_KEY);
      if (sessionData) {
        const sessionObj = JSON.parse(sessionData);
        if (isState(sessionObj)) return sessionObj;
      }
    } catch (err) {
      console.warn('session.read.error', err);
    }
  },
  write(state: State): void {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn('session.write.error', err);
    }
  },
};
