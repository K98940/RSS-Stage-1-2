import { session } from '../app/components/Session/session';
import { Callback, State, StateKey, StateValue } from './../types/types';

const initialState: State = {
  appName: 'fun-chat :(',
  currentPage: 'login',
  currentUser: '',
  currentInput: '',
  pages: {
    chat: {
      title: 'chat',
    },
    login: {
      title: 'login',
    },
    about: {
      title: 'about',
    },
  },
  user: {
    login: '',
    password: '',
    isLogined: false,
    isRequested: false,
  },
  activeUsers: {},
  inactiveUsers: {},
  chat: {},
};

type Subscribers = {
  [index: string]: Callback<unknown>[];
};

const subscribers: Subscribers = {};

const stateHandler = {
  get: (target: State, key: StateKey) => {
    return target[key];
  },
  set: (target: State, prop: StateKey, value: StateValue) => {
    target[prop] = value;
    session.write(target);
    subscribers[prop]?.forEach((callback) => callback());
    return true;
  },
};

export const subscribe = (event: string, calback: Callback<unknown>) => {
  if (!subscribers.hasOwnProperty(event)) subscribers[event] = [];
  subscribers[event].push(calback);
};

export default new Proxy(initialState, stateHandler);
