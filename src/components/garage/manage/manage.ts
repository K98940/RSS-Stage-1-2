import './manage.css';
import { CreateCar } from './create-car/create-car';
import { UpdateCar } from './update-car/update-car';
import { BaseComponent } from '../../base/base-component';
import { RaceButtons } from './race-buttons/race-buttons';
import { Callback } from '../../../types/types';

export class Manage extends BaseComponent {
  constructor(
    startRace: Callback<Event>,
    reset: Callback<Event>,
    generate: Callback<Event>,
  ) {
    super({ classNames: ['manage'] });
    const createCar = new CreateCar();
    const updateCar = new UpdateCar();
    const raceButtons = new RaceButtons(startRace, reset, generate);
    this.appendNodes(createCar, updateCar, raceButtons);
  }
}
