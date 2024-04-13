import { Car } from '../components/car/car';
import { Callback, TCar, Winner } from './../types/types';

type StoreKey = string;
type StoreValue = string | number | object | [];
type Store = {
  state: 'idle' | 'race' | 'race-over' | 'reset';
  carsTotal: TCar[];
  carsPerPage: number;
  carsCount: number;
  winnersCount: number;
  page: number;
  carName: string;
  carColor: string;
  updateCarName: string;
  updateCarColor: string;
  cars: Car[];
  winners: Winner[];
  currentID: number;
  [index: string]: StoreValue;
};
const initialStore: Store = {
  state: 'idle',
  carsTotal: [],
  carsPerPage: 7,
  carsCount: 0,
  winnersCount: 0,
  page: 1,
  carName: '',
  carColor: '',
  updateCarName: '',
  updateCarColor: '#000000',
  currentID: 0,
  cars: [],
  winners: [],
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
    subscribers[prop]?.forEach((callback) => callback());
    return true;
  },
};

export const subscribe = (event: string, calback: Callback<number>) => {
  if (!subscribers.hasOwnProperty(event)) subscribers[event] = [];
  subscribers[event].push(calback);
};

export default new Proxy(initialStore, storeHandler);
