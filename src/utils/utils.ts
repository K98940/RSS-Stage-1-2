export enum Color {
  yellow = 'color: rgb(230, 230, 100);',
  orange = 'color: rgb(255, 160, 100);',
  green = 'color: rgb(50, 255, 50);',
  blue = 'color: rgb(190, 190, 255);',
  white = 'color: rgb(255, 255, 255);',
}
const bgColor = 'bacground-color: rgb(30, 30, 30);';

export const l = (text: string, color: Color = Color.white) => {
  console.log(`%c --> ${text}`, bgColor + color);
};
