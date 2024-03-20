type StoreKey = string;
type StoreValue = string | number | object;
type Store = {
  [index: string]: string | number | object;
};
type Test = {
  [index: string]: string;
};
const initialStore: Store = {
  test: 'my test',
};

const storeHandler = {
  get: (target: Test, key: StoreKey) => {
    // if (typeof target[key] === 'object' && target[key] !== null) {
    //   return new Proxy(target[key], storeHandler);
    // }
    return target[key];
  },
  set: (target: Store, prop: StoreKey, value: StoreValue) => {
    target[prop] = value;
    switch (prop) {
      case 'test':
        console.log('--> store. test changed to', value);
        break;

      default:
        break;
    }
    return true;
  },
};

export default new Proxy(initialStore, storeHandler);
