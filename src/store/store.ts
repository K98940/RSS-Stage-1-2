import { Callback, TCar } from './../types/types';

type StoreKey = string;
type StoreValue = string | number | object | [];
type Store = {
  cars: TCar[];
  currentID: number;
  [index: string]: StoreValue;
};
const initialStore: Store = {
  currentID: 1,
  cars: [],
};
type Subscribers = {
  [index: string]: Callback<number>[];
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
        subscribers.cars?.forEach((callback) => callback());
        break;
      case 'currentID':
        subscribers.currentID?.forEach((callback) => callback());
        break;

      default:
        break;
    }
    return true;
  },
};

export const subscribe = (event: string, calback: Callback<number>) => {
  if (!subscribers.hasOwnProperty(event)) subscribers[event] = [];
  subscribers[event].push(calback);
};

export default new Proxy(initialStore, storeHandler);
