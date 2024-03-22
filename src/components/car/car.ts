import { data } from '../../data/data';
import store from '../../store/store';
import { BaseComponent } from '../base/base-component';
import { Span } from '../base/span/span';
import { Button } from '../button/button';
import './car.css';

export type CarProps = {
  name: string;
  color: string;
  id?: number;
};

export class Car extends BaseComponent {
  btnSelect;

  btnDelete;

  name;

  color;

  id;

  error;

  constructor(props: CarProps) {
    super({
      classNames: ['car'],
    });
    this.error = '';
    this.name = props.name;
    this.color = props.color;
    this.id = props.id || -1;
    this.btnDelete = new Button({
      textContent: 'REMOVE',
      callback: this.clickRemove.bind(this),
    });
    this.btnSelect = new Button({
      textContent: 'SELECT',
      callback: this.clickSelect.bind(this),
    });
    this.appendNodes(this.btnSelect, this.btnDelete, new Span(props.name));
    this.setColor(props.color);
  }

  public setColor(color: string): void {
    this.node.style.backgroundColor = color;
  }

  private clickRemove(): void {
    if (this.id) data.removeCar(this.id);
  }

  private clickSelect(): void {
    if (this.id) store.currentID = this.id;
  }
}
