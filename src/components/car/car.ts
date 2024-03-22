import { BaseComponent } from '../base/base-component';
import { CarEngine } from './car-engine/car-engine';
import { CarHeader } from './car-header/car-header';
import { CarModel } from './car-model/car-model';
import './car.css';

export type CarProps = {
  name: string;
  color: string;
  id?: number;
};

export class Car extends BaseComponent {
  name;

  color;

  id;

  error;

  carModel;

  constructor(props: CarProps) {
    super({
      classNames: ['car'],
    });
    this.error = '';
    this.name = props.name;
    this.color = props.color;
    this.id = props.id || -1;

    this.carModel = new CarModel(this);
    const conteiner = new BaseComponent({ classNames: ['car-main'] });
    conteiner.appendNodes(new CarEngine(this), this.carModel);

    this.appendNodes(new CarHeader(this), conteiner);
    this.carModel.setColor(props.color);
  }

  public getContainerRigth(): number {
    const coord = this.node.getBoundingClientRect();
    const containerRight = coord.right;
    return containerRight;
  }
}
