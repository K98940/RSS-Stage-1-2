import './car.css';
import { Button } from '../button/button';
import { TCar } from './../../types/types';
import { Color, l } from '../../utils/utils';
import { CarModel } from './car-model/car-model';
import { Engine } from './car-engine/car-engine';
import { CarHeader } from './car-header/car-header';
import store, { subscribe } from '../../store/store';
import { BaseComponent } from '../base/base-component';

export class Car extends Engine {
  carModel;

  btnStartEngine;

  btnStopEngine;

  name;

  color;

  id;

  node;

  constructor(props: TCar) {
    super();
    this.name = props.name;
    this.color = props.color;
    this.id = props.id;

    this.node = new BaseComponent({ classNames: ['car'] });
    this.carModel = new CarModel(this);
    this.btnStartEngine = new Button({
      textContent: 'A',
      classNames: ['engine__btn', 'engine-a_on'],
      callback: this.startMove.bind(this),
    });
    this.btnStopEngine = new Button({
      textContent: 'B',
      classNames: ['engine__btn', 'btn_disabled'],
      callback: this.stopEngine.bind(this),
    });
    this.carModel.setColor(props.color);
    const conteiner = new BaseComponent({ classNames: ['car-main'] });
    conteiner.appendNodes(
      this.btnStartEngine,
      this.btnStopEngine,
      this.carModel,
    );
    this.node.appendNodes(new CarHeader(this), conteiner);
    subscribe('currentID', () => {
      this.setSelectedClass();
    });
  }

  public startMove(): void {
    this.btnStartEngine.setClasses(['btn_disabled']);
    this.btnStartEngine.removeClass('engine-a_on');
    this.start(this.id).then((response) => {
      if (response instanceof Error) throw new Error();
      this.btnStopEngine.removeClass('btn_disabled');
      this.btnStopEngine.setClasses(['engine-b_on']);
      const raceTime = response.distance / response.velocity;
      this.carModel.startEngine(raceTime);
      this.drive(this.id)
        .then(() => {
          l('CAR FINISH!!!', Color.green);
        })
        .catch(() => {
          l('CAR BROKEN!!!', Color.orange);
          this.carModel.carBroken();
        });
    });
  }

  public stopEngine(): void {
    this.btnStopEngine.setClasses(['btn_disabled']);
    this.stop(this.id).then((response) => {
      if (response instanceof Error) throw new Error();
      this.carModel.stopEngine();
      this.btnStopEngine.removeClass('engine-b_on');
      this.btnStartEngine.removeClass('btn_disabled');
      this.btnStartEngine.setClasses(['engine-a_on']);
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
}
