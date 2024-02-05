export default () => {
  console.log(
    '%cПривет!%cДля облегчения проверки конечно же есть кое-что. Клавиша\n %c H \n%cнажатая на клавиатуре покажет / скроет подсказку',
    'font-size: 14px; font-weight: 700; background-color: black; color: white; padding: 8px 20px; border: 1px solid yellow; border-radius: 10px',
    'background-color: transparent; padding: 8px 4px',
    'background-color: #555555; color: #ffff00; line-height: 26px; font-size: 20px',
    'background-color: transparent; padding: 8px 4px; font-size: 12px'
  );

  console.log(
    'Игровое поле:\n%c ЛКМ: %c закрасить клетку\n%c ПКМ: %c поставить крестик\nкнопка %c switch brush: %c  переключить режим ЛКМ закрасить / поставить крестик (удобно пользоваться если нет мышки)\n',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent'
  );
  console.log(
    'Поле с подсказками:\n%c ЛКМ: %c заполнить крестиками всю строку / столбец\n%c ПКМ: %c убрать все крестики на строке / столбце\n',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent'
  );
};
