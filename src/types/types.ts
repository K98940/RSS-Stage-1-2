import { Car } from '../components/car/car';

export enum View {
  garage = 'garage',
  winners = 'winners',
}

export type Vewis = {
  [index in View]: HTMLParagraphElement;
};

export type Callback<T> = {
  (e?: T): void;
};

export type TCallback = {
  (): void;
};

export type HTMLAttributes = [string, string];
export type Html = HTMLTemplateElement | HTMLElement;

export type TCar = {
  name: string;
  color: string;
  id: number;
};
export type MyResponse = { velocity: number; distance: number };
export type RaceResult = { car: Car; time: number };
