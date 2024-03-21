import { Callback, TCar } from './../types/types';

type StoreKey = string;
type StoreValue = string | number | object | [];
type Store = {
  cars: TCar[];
  [index: string]: StoreValue;
};
const initialStore: Store = {
  cars: [],
};
type Subscribers = {
  [index: string]: Callback[];
};
const subscribers: Subscribers = {};

const storeHandler = {
  get: (target: Store, key: StoreKey) => {
    return target[key];
  },
  set: (target: Store, prop: StoreKey, value: StoreValue) => {
    target[prop] = value;
    switch (prop) {
      case 'cars':
        subscribers.cars.forEach((callback) => callback());
        break;

      default:
        break;
    }
    return true;
  },
};

export const subscribe = (event: string, calback: Callback) => {
  if (!subscribers.hasOwnProperty(event)) subscribers[event] = [];
  subscribers[event].push(calback);
};

export default new Proxy(initialStore, storeHandler);
