import { StateObect } from '../types/types';

const LS_KEY = '202403081510RSSPZ';

export class LocalStorage {
  static instance: LocalStorage | undefined;

  constructor() {
    if (LocalStorage.instance) {
      return LocalStorage.instance;
    }

    LocalStorage.instance = this;
  }

  public save(data: StateObect): void {
    if (typeof data === 'object') {
      const str = JSON.stringify(data);
      localStorage.setItem(LS_KEY, str);
    }
  }

  public load(): object | null {
    try {
      const response = localStorage.getItem(LS_KEY);
      const data = JSON.parse(response || '');
      return data || null;
    } catch (error) {
      return null;
    }
  }

  public clear(): void {
    localStorage.removeItem(LS_KEY);
  }
}
