import './car-model.css';
import { Car } from '../car';
import { BaseComponent } from '../../base/base-component';

export class CarModel extends BaseComponent {
  car;

  svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  constructor(car: Car) {
    super({ classNames: ['car-model'] });

    this.svg.setAttribute('viewBox', '20 140 512 512');
    this.svg.setAttribute('fill', 'none');
    this.svg.setAttribute('stroke', 'black');
    this.svg.style.stroke = 'black';

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
      'd',
      'M433.14,219.3l-.15,0a64.5,64.5,0,0,0-14.05-1.56H395.5c-10.32,0-18.26-7.66-27.46-16.52-22.32-21.5-52.58-43.48-107.8-43.48-57.86,0-115.64,22.77-142.8,45.26A64.31,64.31,0,0,1,76.55,217.7H57.3a28.59,28.59,0,0,0-28.56,28.55v46.42A28.59,28.59,0,0,0,57.3,321.22h27a40.88,40.88,0,0,0,80.26,0h182.9a40.88,40.88,0,0,0,80.26,0h27a28.59,28.59,0,0,0,28.56-28.55V282A64.4,64.4,0,0,0,433.14,219.3Zm21.73,30.45H441.69a2.31,2.31,0,0,1-2.28-2.28v-9.21A48.61,48.61,0,0,1,454.87,249.75ZM127.64,215.28c25-20.66,78.52-41.58,132.6-41.58,49.41,0,75.67,18.75,96.7,39,10.21,9.83,21.79,21,38.56,21h23.44q2.26,0,4.47.21v13.56a18.3,18.3,0,0,0,18.28,18.28h22.74A48,48,0,0,1,467.26,282v1.8H415.8l-.56-.53a40.9,40.9,0,0,0-55.33,0l-.55.52H152.64l-.56-.53a40.9,40.9,0,0,0-55.33,0l-.55.52H44.74V265.75H58.52A18.3,18.3,0,0,0,76.8,247.47V233.69A80.32,80.32,0,0,0,127.64,215.28ZM348.06,303c-.15.59-.3,1.19-.43,1.79l0,.14c0,.11-.05.23-.08.34h-183a1.74,1.74,0,0,1,0-.22c0-.19-.09-.38-.13-.57-.1-.44-.21-.87-.32-1.3,0-.21-.11-.42-.16-.62q-.19-.7-.42-1.41c-.05-.13-.09-.27-.13-.41l-.3-.87H349c-.33.94-.63,1.89-.89,2.85C348.11,302.76,348.09,302.86,348.06,303ZM57.3,233.7h3.5v13.77a2.31,2.31,0,0,1-2.28,2.28H44.74v-3.5A12.57,12.57,0,0,1,57.3,233.7ZM47,299.82H85.88c-.34.94-.63,1.89-.9,2.85l-.07.28c-.16.59-.3,1.19-.43,1.79,0,.05,0,.09,0,.14s0,.23-.07.34H57.3A12.56,12.56,0,0,1,47,299.82Zm102.32,13.59a24.89,24.89,0,0,1-49.78,0v-.14a24.7,24.7,0,0,1,6.12-16.21l.17-.19a24.89,24.89,0,0,1,35.43-1.8c.33.29.64.6.94.91l.37.39c.16.17.32.33.47.5l.15.17.25.3.48.57.3.39.47.63.23.34.49.71.19.32c.16.25.32.51.47.77.06.1.11.2.16.3.15.27.3.54.44.81.06.11.1.22.16.33.13.27.26.54.38.81,0,.09.07.18.11.26.13.3.26.61.37.91,0,.06,0,.12.07.18.12.34.24.68.35,1,0,.07,0,.14.07.2.1.34.2.67.29,1,0,.09,0,.17.07.26.08.32.16.65.23,1a2.23,2.23,0,0,1,0,.23c.07.34.14.68.2,1l0,.23c.05.35.1.69.14,1,0,.12,0,.25,0,.37,0,.31.05.61.07.92,0,.14,0,.28,0,.42,0,.3,0,.59,0,.89Zm263.16,0a24.89,24.89,0,0,1-49.78,0v-.14a24.59,24.59,0,0,1,6.11-16.2c.06-.07.12-.13.17-.2.56-.62,1.14-1.22,1.76-1.79a24.91,24.91,0,0,1,33.68,0c.32.29.64.6.94.91.14.14.28.29.41.44l.43.45a2.09,2.09,0,0,0,.14.17l.43.51c.1.12.21.24.3.36s.36.47.54.71l.24.31c.16.23.32.46.47.7s.17.23.24.35.26.42.38.62l.28.47c.12.2.22.41.33.61s.19.33.27.5l.29.6c.08.18.18.36.26.54s.15.37.22.55.18.41.26.62.11.33.17.49.17.47.25.71.08.28.13.42.16.53.23.79l.09.39c.07.28.15.56.21.85,0,.12,0,.25.07.38.05.29.11.58.16.87,0,.13,0,.26.05.38,0,.3.09.6.12.9,0,.15,0,.3,0,.45s.05.55.07.84,0,.29,0,.44,0,.58,0,.87Zm42.23-8.19H427.63a1.74,1.74,0,0,0-.05-.22c0-.19-.08-.38-.13-.57-.1-.44-.2-.87-.31-1.3-.06-.21-.11-.42-.17-.62q-.2-.7-.42-1.41l-.12-.41c-.1-.29-.2-.58-.31-.87H465A12.56,12.56,0,0,1,454.7,305.22ZM151.88,225.08c-.08.11-.16.23-.23.35s-.13.21-.2.32l-.18.35c-.06.12-.12.23-.17.35l-.15.36c0,.12-.09.24-.13.37s-.08.25-.12.37-.07.25-.09.38-.06.25-.08.38l-.06.4c0,.12,0,.25,0,.37s0,.29,0,.43,0,.13,0,.2,0,.11,0,.16,0,.29,0,.43,0,.25,0,.38,0,.25.05.38,0,.27.08.4l.09.35c0,.14.07.27.12.4l.12.35.15.37c.06.12.12.24.17.36l.18.33c.06.12.14.23.21.35l.2.31.24.32.25.3.25.29.3.3.12.12.16.13c.1.08.19.17.29.24a3.33,3.33,0,0,0,.32.24l.3.2c.11.08.23.15.35.22l.3.16.38.19.31.13c.13.06.27.1.4.15l.32.11.42.1.32.08.48.07.28,0c.25,0,.51,0,.77,0H319.09l.45,0,.35,0,.38-.06.4-.07.3-.07.45-.12.28-.11.45-.16c.12,0,.24-.12.36-.18a3.36,3.36,0,0,0,.33-.16l.37-.22.3-.18.31-.24.32-.24c.09-.07.17-.16.26-.24l.32-.3.06-.05.18-.21.29-.33.23-.31.23-.33.21-.34.18-.33c.07-.12.12-.24.18-.37l.15-.34c.05-.12.1-.25.14-.37l.12-.37c0-.13.07-.26.1-.38s.06-.25.08-.38.05-.28.07-.41,0-.24,0-.36,0-.31,0-.47a2.29,2.29,0,0,0,0-.25s0-.05,0-.07,0-.33,0-.49,0-.21,0-.31,0-.29-.07-.44,0-.23-.06-.34-.06-.26-.09-.38-.06-.25-.1-.38-.1-.26-.15-.39-.07-.22-.12-.33a3.88,3.88,0,0,0-.22-.46l-.11-.24c-.08-.14-.17-.28-.26-.42l-.15-.24c-.08-.12-.17-.22-.25-.33s-.15-.21-.23-.3-.16-.18-.24-.27l-.3-.32-.05-.06-1.78-1.71c-14.54-14.07-34.45-33.34-70.11-33.34-42.2,0-83.81,17.82-99.93,35.15l0,0-.22.24-.12.14c-.1.11-.19.23-.28.34Zm146.54-3.37H183.26c18.22-9.4,44.38-16.82,69.42-16.82C273,204.89,287.2,212.65,298.42,221.71ZM234.56,253a8,8,0,0,1-8,8H212.15a8,8,0,0,1,0-16h14.41A8,8,0,0,1,234.56,253Zm106.38,19.2a8,8,0,0,1,0-11.31l14.2-14.21A8,8,0,0,1,366.46,258l-14.21,14.2a8,8,0,0,1-11.31,0Zm-18.45-25.52A8,8,0,0,1,333.8,258l-14.2,14.2a8,8,0,1,1-11.32-11.31Z',
    );
    path.setAttribute('stroke-width', '5');
    path.setAttribute('transform', 'scale(0.9)');

    this.svg.appendChild(path);
    this.getNode().appendChild(this.svg);
    this.car = car;
  }

  public setColor(color: string): void {
    this.svg.style.fill = color;
  }

  public startEngine(raceTime: number): void {
    const distance = this.calcDistance();
    this.car.node.getNode().style.setProperty('--path-length', distance);
    this.car.node.getNode().style.setProperty('--animation-time', `${raceTime}ms`);
    this.setClasses(['car_move']);
  }

  public stopEngine(): void {
    this.car.node.getNode().style.setProperty('--path-length', ``);
    this.removeClass('car_move');
    this.removeClass('car_stopped');
  }
  // TODO можно сделать отдельные классы car-stopped и car-broken
  // и по ним выбирать color для финишного флага
  // классу car-broken повесить эффект сломаной машины

  public carStopped(): void {
    this.setClasses(['car_stopped']);
  }

  private calcDistance(): string {
    const paddinfLeft = 14;
    const containerRight = this.car.getContainerRigth();
    const coordCar = this.node.getBoundingClientRect();
    const distance = containerRight - coordCar.right + paddinfLeft;
    return `${distance}px`;
  }
}
