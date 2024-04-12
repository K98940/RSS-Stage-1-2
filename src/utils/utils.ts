import carNames from './carNames';

export enum Color {
  yellow = 'bacground-color: rgb(30, 30, 30); color: rgb(230, 230, 100);',
  orange = 'bacground-color: rgb(30, 30, 30); color: rgb(255, 160, 100);',
  green = 'bacground-color: rgb(30, 30, 30); color: rgb(50, 255, 50);',
  blue = 'bacground-color: rgb(255, 255, 255); color: rgb(190, 190, 255);',
  white = 'bacground-color: rgb(0, 0, 0); color: rgb(255, 255, 255);',
  red = 'bacground-color: rgb(255, 255, 255); color: rgb(255, 0, 0);',
}
export const l = (text: string, color: Color = Color.white) => {
  console.log(`%c --> ${text}`, color);
};

export const random = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};

type CarName = {
  brand: string;
  name: string;
};
export const generateCarName = (): CarName => {
  const brand = carNames[random(0, carNames.length - 1)];
  const carname = brand[random(1, brand.length - 1)];
  return { brand: brand[0], name: carname };
};

export function responceToJSON<T>(response: Response): T {
  if (!response.ok) throw new Error(response.statusText);
  return response.json() as T;
}

export async function processResponse<T>(response: Response) {
  const HEADER_X_TOTAL = 'X-Total-Count';
  if (!response.ok) throw new Error(response.statusText);
  return { response, count: response.headers.get(HEADER_X_TOTAL), json: (await response.json()) as T };
}
