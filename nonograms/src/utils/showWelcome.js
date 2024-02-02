export default () => {
  console.clear();
  console.log(
    `%cПривет!
%cДля облегчения проверки конечно же есть кое-то.
клавиша %c H %c(hide) покажет / скроет подсказку`,
    'background-color: #000000; color: #ffff00',
    'background-color: #000000',
    'background-color: #000000; color: #ffff00; font-size: 20px',
    'background-color: #000000; color: #ffffff; font-size: 12px'
  );

  console.log(
    'Игровое поле:\n%cЛКМ:%c закрасить клетку\n%cПКМ:%c поставить крестик\nкнопка %cswitch brush:%c  переключить режим ЛКМ закрасить / поставить крестик\n',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent; color: #ffffff',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent; color: #ffffff',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent; color: #ffffff'
  );
  console.log(
    'Поле с подсказками:\n%cЛКМ:%c заполнить крестиками всю строку / столбец\n%cПКМ:%c убрать все крестики на строке / столбце\n',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent; color: #ffffff',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent; color: #ffffff'
  );
};
