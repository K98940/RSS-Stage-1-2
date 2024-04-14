import { Callback, ChatMessage, Pages } from './../types/types';
type StateKey = string;
type StateValue = string | number | object | [];
type State = {
  currentPage: `${Pages}`;
  currentUser: string;
  currentInput: string;
  pages: {
    [key in `${Pages}`]: {
      title: string;
    };
  };
  user: {
    login: string;
    password: string;
  };
  activeUsers: {
    [index: string]: boolean;
  };
  inactiveUsers: {
    [index: string]: boolean;
  };
  chat: {
    [index: string]: ChatMessage[];
  };
  [index: string]: StateValue;
};

const initialState: State = {
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
  },
  user: {
    login: '',
    password: '',
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
    subscribers[prop]?.forEach((callback) => callback());
    return true;
  },
};

export const subscribe = (event: string, calback: Callback<unknown>) => {
  if (!subscribers.hasOwnProperty(event)) subscribers[event] = [];
  subscribers[event].push(calback);
};

export default new Proxy(initialState, stateHandler);
