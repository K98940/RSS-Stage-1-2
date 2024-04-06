import { Callback, Pages } from './../types/types';
type StateKey = string;
type StateValue = string | number | object | [];
type State = {
  currentPage: `${Pages}`;
  pages: {
    [key in `${Pages}`]: object;
  };
  user: {
    name: string;
    password: string;
  };
  users: [];
  [index: string]: StateValue;
};

const initialState: State = {
  currentPage: 'chat',
  pages: {
    chat: {},
    login: {},
  },
  user: {
    name: '',
    password: '',
  },
  users: [],
};

type Subscribers = {
  [index: string]: Callback[];
};

const subscribers: Subscribers = {};

const stateHandler = {
  get: (target: State, key: StateKey) => {
    return target[key];
  },
  set: (target: State, prop: StateKey, value: StateValue) => {
    target[prop] = value;
    subscribers[prop]?.forEach((callback) => callback());
    return true;
  },
};

export const subscribe = (event: string, calback: Callback) => {
  if (!subscribers.hasOwnProperty(event)) subscribers[event] = [];
  subscribers[event].push(calback);
};

export default new Proxy(initialState, stateHandler);
