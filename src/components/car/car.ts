import { BaseComponent } from '../base/base-component';
import './car.css';

export type CarProps = {
  name: string;
  color: string;
  id?: number;
};

export class Car extends BaseComponent {
  constructor(props: CarProps) {
    super({
      classNames: ['car'],
      textContent: props.name,
    });
    this.setColor(props.color);
  }

  public setColor(color: string) {
    this.node.style.backgroundColor = color;
  }
}
