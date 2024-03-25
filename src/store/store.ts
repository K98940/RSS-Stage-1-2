import { Car } from '../components/car/car';
import { Callback } from './../types/types';

type StoreKey = string;
type StoreValue = string | number | object | [];
type Store = {
  carsPerPage: number;
  carsCount: number;
  page: number;
  carName: string;
  updateCarName: string;
  cars: Car[];
  currentID: number;
  [index: string]: StoreValue;
};
const initialStore: Store = {
  carsPerPage: 7,
  carsCount: 0,
  page: 1,
  carName: '',
  updateCarName: '',
  currentID: 0,
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
      case 'carName':
        subscribers.carName?.forEach((callback) => callback());
        break;
      case 'updateCarName':
        subscribers.updateCarName?.forEach((callback) => callback());
        break;
      case 'carsCount':
        subscribers.carsCount?.forEach((callback) => callback());
        break;
      case 'page':
        subscribers.page?.forEach((callback) => callback());
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
