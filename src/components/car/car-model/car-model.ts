import './car-model.css';
import { Car } from '../car';
import { BaseComponent } from '../../base/base-component';

export class CarModel extends BaseComponent {
  car;

  constructor(car: Car) {
    super({ classNames: ['car-model'] });
    this.car = car;
  }

  public setColor(color: string): void {
    this.node.style.backgroundColor = color;
  }

  public startEngine(raceTime: number): void {
    const distance = this.calcDistance();
    this.car.getNode().style.setProperty('--path-length', distance);
    this.car.getNode().style.setProperty('--animation-time', `${raceTime}ms`);
    this.setClasses(['car_move']);
  }

  public stopEngine(): void {
    this.car.getNode().style.setProperty('--path-length', ``);
    this.removeClass('car_move');
    this.removeClass('car_broken');
  }

  public carBroken(): void {
    this.setClasses(['car_broken']);
  }

  private calcDistance(): string {
    const paddinfLeft = 16;
    const containerRight = this.car.getContainerRigth();
    const coordCar = this.node.getBoundingClientRect();
    const distance = containerRight - coordCar.right - paddinfLeft;
    return `${distance}px`;
  }
}
