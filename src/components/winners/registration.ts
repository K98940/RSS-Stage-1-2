import { Color, l } from '../../utils/utils';
import { Car } from '../car/car';
import { Statistic } from './statistic';

export class RegistrationResults extends Statistic {
  stat;

  constructor() {
    super();
    this.stat = new Statistic();
  }

  public saveResultRace(car: Car, timeRace: number): Promise<number> {
    return new Promise((resolve, reject) => {
      l('The car ' + car.name + ' is FINISHED', Color.white);
      this.stat
        .getWinneR({ id: car.id })
        .then(
          (winner) => {
            if ('time' in winner) {
              const { wins, time } = winner;
              if (timeRace < time) {
                // <--- new personal record
                this.stat.updateWinner({ id: car.id, time: timeRace, wins: wins + 1 }).then((newRecord) => {
                  l(`The car ${car.name} got New Record: ${timeRace} seconds!`, Color.green);
                  resolve(time);
                });
              }
            }
            resolve(timeRace);
          },
          () => {
            // <-- record not found, create new record
            this.stat.createWinner({ id: car.id, wins: 1, time: timeRace }).then(() => {
              l(`The car ${car.name} got New Record: ${timeRace} seconds!`, Color.green);
              resolve(timeRace);
            });
          },
        )
        .catch((error) => {
          l('Error ' + error, Color.orange);
          reject();
        });
    });
  }
}
