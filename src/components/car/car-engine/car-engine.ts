import { drive } from './../../../api/drive-mode';
import { engine } from '../../../api/start-engine';
import { DriveStatus, MyResponse } from './../../../types/types';

export class Engine {
  public setDrive(id: number, status: DriveStatus): Promise<MyResponse | Error> {
    return new Promise((resolve, reject) => {
      engine
        .setStatus(id, status)
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
