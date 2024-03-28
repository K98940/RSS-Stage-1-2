import './car.css';
import { Button } from '../button/button';
import { RaceResult, TCar } from './../../types/types';
import { CarModel } from './car-model/car-model';
import { Engine } from './car-engine/car-engine';
import { CarHeader } from './car-header/car-header';
import store, { subscribe } from '../../store/store';
import { BaseComponent } from '../base/base-component';
import { Statistic } from '../winners/statistic';
import { RegistrationResults } from '../winners/registration';

export class Car extends Engine {
  carModel;

  btnStartEngine;

  btnStopEngine;

  name;

  color;

  id;

  node;

  stat;

  registration;

  constructor(props: TCar) {
    super();
    this.name = props.name;
    this.color = props.color;
    this.id = props.id;

    this.stat = new Statistic();
    this.registration = new RegistrationResults();
    this.node = new BaseComponent({ classNames: ['car'] });
    this.carModel = new CarModel(this);
    this.btnStartEngine = new Button({
      textContent: 'A',
      classNames: ['engine__btn', 'engine-a_on'],
      callback: () => {
        this.startMove().catch(() => {});
      },
    });
    this.btnStopEngine = new Button({
      textContent: 'B',
      classNames: ['engine__btn', 'btn_disabled'],
      callback: () => {
        this.stopEngine().then((result) => {
          if (!(result instanceof Error)) store.state = 'idle';
        });
      },
    });
    this.carModel.setColor(props.color);
    const conteiner = new BaseComponent({ classNames: ['car-main'] });
    conteiner.appendNodes(this.btnStartEngine, this.btnStopEngine, this.carModel);
    this.node.appendNodes(new CarHeader(this), conteiner);
    subscribe('currentID', () => {
      this.setSelectedClass();
    });
  }

  public startMove(): Promise<RaceResult | Error> {
    return new Promise((resolve, reject) => {
      this.btnStartOFF();
      this.start(this.id).then((response) => {
        if (response instanceof Error) throw new Error();
        this.btnStopON();
        const raceTime = response.distance / response.velocity;
        const raceTimeSec = Number((raceTime / 1000).toFixed(2));
        this.carModel.startEngine(raceTime);
        this.drive(this.id, raceTimeSec)
          .then(() => {
            this.carModel.carStopped();
            this.carModel.setClasses(['car-finised']);
            resolve({ car: this, time: raceTimeSec });
          })
          .catch((error: string) => {
            this.carModel.carStopped();
            if (error !== 'The user aborted a request.') {
              this.btnStartOFF();
              this.btnStopON();
              this.carModel.setClasses(['car-broken']);
            }
            reject(error);
          });
      });
    });
  }

  public stopEngine(): Promise<boolean | Error> {
    this.btnStopEngine.setClasses(['btn_disabled']);
    return new Promise((resolve, reject) => {
      this.abort(`${this.id}`);
      this.stop(this.id)
        .then((response) => {
          if (response instanceof Error) throw new Error();
          this.carModel.stopEngine();
          this.btnStopOFF();
          this.btnStartON();
          resolve(true);
        })
        .catch((error: string) => reject(error));
    });
  }

  public getContainerRigth(): number {
    const coord = this.node.getNode().getBoundingClientRect();
    const containerRight = coord.right;
    return containerRight;
  }

  private setSelectedClass() {
    const currentID = store.currentID;
    if (currentID === this.id) {
      this.node.setClasses(['car_selected']);
    } else this.node.removeClass('car_selected');
  }

  private btnStartON() {
    this.btnStartEngine.removeClass('btn_disabled');
    this.btnStartEngine.setClasses(['engine-a_on']);
  }

  private btnStartOFF() {
    this.btnStartEngine.setClasses(['btn_disabled']);
    this.btnStartEngine.removeClass('engine-a_on');
  }

  private btnStopON() {
    this.btnStopEngine.removeClass('btn_disabled');
    this.btnStopEngine.setClasses(['engine-b_on']);
  }

  private btnStopOFF() {
    this.btnStopEngine.setClasses(['btn_disabled']);
    this.btnStopEngine.removeClass('engine-b_on');
  }
}
