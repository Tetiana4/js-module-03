// Выполни рефакторинг функции countProps(object)
// используя метод Object.keys() и, возможно, цикл for...of.

function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;
  const keys = Object.keys(object).length
  propCount = keys;

  return propCount;
  // Пиши код выше этой строки
}
