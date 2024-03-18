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
      delete data.process;
      delete data.DOM;
      delete data._level;
      delete data._round;
      delete data._currentLine;
      const str = JSON.stringify(data);
      localStorage.setItem(LS_KEY, str);
    }
  }

  public load(): object | null {
    try {
      const response = localStorage.getItem(LS_KEY);
      if (!response) return null;

      const data = JSON.parse(response);
      return data;
    } catch (error) {
      return { error };
    }
  }

  public clear(): void {
    localStorage.removeItem(LS_KEY);
  }
}
