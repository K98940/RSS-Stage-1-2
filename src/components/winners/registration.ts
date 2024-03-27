import store from '../../store/store';
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
      this.stat
        .getWinneR({ id: car.id })
        .then(
          (winner) => {
            if ('time' in winner) {
              let { wins, time } = winner;
              wins += 1;
              if (timeRace < time) {
                // <--- new personal record
                time = timeRace;
              }
              this.stat.updateWinner({ id: car.id, time, wins }).then(() => {
                resolve(time);
              });
            }
            resolve(timeRace);
          },
          () => {
            // <-- record not found, create new record
            this.stat.createWinner({ id: car.id, wins: 1, time: timeRace }).then(() => {
              resolve(timeRace);
            });
          },
        )
        .catch((error) => {
          l('Error ' + error, Color.orange);
          reject();
        })
        .finally(() => {
          this.stat.getWinnersCount().then((winnerCount) => (store.winnersCount = winnerCount));
        });
    });
  }
}
