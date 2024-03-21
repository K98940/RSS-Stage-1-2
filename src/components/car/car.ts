import { data } from '../../data/data';
import { BaseComponent } from '../base/base-component';
import { Button } from '../button/button';
import './car.css';

export type CarProps = {
  name: string;
  color: string;
  id?: number;
};

export class Car extends BaseComponent {
  btnDelete;

  name;

  color;

  id;

  constructor(props: CarProps) {
    super({
      classNames: ['car'],
      textContent: props.name,
    });
    this.name = props.name;
    this.color = props.color;
    this.id = props.id;
    this.btnDelete = new Button({
      textContent: 'REMOVE',
      callback: this.clickRemove.bind(this),
    });
    this.appendNodes(this.btnDelete);
    this.setColor(props.color);
  }

  public setColor(color: string): void {
    this.node.style.backgroundColor = color;
  }

  private clickRemove(): void {
    if (this.id) data.removeCar(this.id);
  }
}
