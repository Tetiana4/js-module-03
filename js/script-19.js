// Напиши функцию getAllPropValues(propName)
// которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким
// именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем,
//     функция должна вернуть пустой массив.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
const values = [];
    for (const product of products) {
        if (product[propName]) {
            values.push(product[propName]);
        }  
    }
    
return values;
  // Пиши код выше этой строки
}
