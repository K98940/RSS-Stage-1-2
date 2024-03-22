import './car-engine.css';
import { Car } from '../car';
import { data } from '../../../data/data';
import { Button } from '../../button/button';
import { BaseComponent } from '../../base/base-component';

export class CarEngine extends BaseComponent {
  btnStartEngine;

  btnStopEngine;

  car;

  constructor(car: Car) {
    super({ classNames: ['car-engine'] });
    this.car = car;
    this.btnStartEngine = new Button({
      textContent: 'A',
      classNames: ['engine__btn'],
      callback: this.clickStartEngine.bind(this),
    });
    this.btnStopEngine = new Button({
      textContent: 'B',
      classNames: ['engine__btn', 'btn_disabled'],
      callback: this.clickStopEngine.bind(this),
    });
    this.appendNodes(this.btnStartEngine, this.btnStopEngine);
  }

  private clickStartEngine(): void {
    this.btnStartEngine.setClasses(['btn_disabled']);
    this.btnStopEngine.removeClass('btn_disabled');

    data.startEngine(this.car.id).then((response) => {
      if (response instanceof Error) throw new Error();
      const raceTime = response.distance / response.velocity;
      this.car.carModel.startEngine(raceTime);
      data
        .go(this.car.id)
        .then(() => {
          console.log('CAR FINISH!!!');
        })
        .catch(() => {
          console.log('CAR BROKEN!!!');
          this.car.carModel.carBroken();
        });
    });
  }

  private clickStopEngine(): void {
    this.btnStopEngine.setClasses(['btn_disabled']);
    this.btnStartEngine.removeClass('btn_disabled');
    this.car.carModel.stopEngine();
  }
}
