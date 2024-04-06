export enum Color {
  yellow = 'bacground-color: rgb(30, 30, 30); color: rgb(230, 230, 100);',
  orange = 'bacground-color: rgb(30, 30, 30); color: rgb(255, 160, 100);',
  green = 'bacground-color: rgb(30, 30, 30); color: rgb(50, 255, 50);',
  blue = 'bacground-color: rgb(255, 255, 255); color: rgb(190, 190, 255);',
  white = 'bacground-color: rgb(0, 0, 0); color: rgb(255, 255, 255);',
  red = 'bacground-color: rgb(255, 255, 255); color: rgb(255, 0, 0);',
}
export const l = (text: string, obj: unknown, color: Color = Color.white) => {
  console.log(`%c${text}`, color, obj);
};

export const random = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};
