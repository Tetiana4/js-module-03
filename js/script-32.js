// Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так,
// чтобы она считала сумму только тех аргументов,
// которые больше чем заданное число.Это число должно быть первым параметром функции.

// Пиши код ниже этой строки
function addOverNum(...args) {
  let total = 0;
  let number = 0;

  for (const arg of args) {
    number = args[0];
    if (arg > number) {
     total += arg;
    }
  }

  return total;
  // Пиши код выше этой строки
}

