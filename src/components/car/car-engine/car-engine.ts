import { drive } from './../../../api/drive-mode';
import { engine } from '../../../api/start-engine';
import { MyResponse } from './../../../types/types';

export class Engine {
  public start(id: number): Promise<MyResponse | Error> {
    return new Promise((resolve, reject) => {
      engine
        .setStatus(id, 'started')
        .then((response) => resolve(response))
        .catch((error: Error) => reject(error));
    });
  }

  // TODO start() + stop()
  public stop(id: number): Promise<MyResponse | Error> {
    return new Promise((resolve, reject) => {
      engine
        .setStatus(id, 'stopped')
        .then((response) => resolve(response))
        .catch((error: Error) => reject(error));
    });
  }

  public drive(id: number, raceTime: number) {
    return new Promise((resolve, reject) => {
      drive
        .go(id)
        .then(() => resolve(raceTime))
        .catch((error) => reject(error));
    });
  }

  public abort(id: string) {
    drive.abort(id);
  }
}
