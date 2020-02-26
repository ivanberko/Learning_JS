
const unit = {
  adress: 'Kharkov',
  // square: 250,
  subUnitName: ['1', '2', '3'],
};

const {
  adress,
  square: area = 1000,
  subUnitName: [f, s, c], // при записи переменных в значение одного из ключей, мы не сможем обратиться к самому ключу
  // subUnitName: [a, ...old],
} = unit;
// square: area = 1000 - изменяем переменную на area и присваиваем ей значение по умолчанию, если такого ключа в объекте нет
console.log(area);

// Методы примитивов------------------------------------------------------------------

const num = 100.23324;
console.log(num.toString(16)); // для перевода в другую систему исчесления

console.log(Math.round((num * 100) / 100));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(num.toFixed(3));

const a = 0.1;
const b = 0.2;
console.log(a + b === 0.3);
console.log(a + b);

console.log(`Number.isNaN: ${Number.isNaN(+'sjfb')}`);
console.log(Number.isFinite(+'sjfb')); // false так же для NaN, infinity, -infinity
console.log(Number.isFinite(+'34')); // true

console.log(Object.is(0, -0)); // для точного сравнения чисел

const size = '25px';
const size2 = '223.23%';

console.log(parseInt(size)); // 25
console.log(parseFloat(size2)); // 223.23

console.log(Math.random() * 10);

const arr = [1, 2, 3, 3, 4, 5, -1, -34, 34, 66, 11];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

// Функциональные методы массивов =====================================================================================

const array = ['a', 'ddd', 'f', 'g', 'dde', 'g', 'gdf', 'ddgg', 'h', 'e'];

// array.forEach((el, i, arr) => {
//   // console.log(el);
//   console.log(i);
// });

array.forEach((el) => console.log(el));

const lenghtArr = array.filter((el) => el.length === 3);
console.log(lenghtArr);

const mapArr = array.map((el, i) => `${i} - ${el}`);
console.log(mapArr);

const arraySort = [1, 5, 4, 6, 235, 325, 45, 456677, 325];
console.log(
  arraySort.sort((a, b) => {
    if (a - b < 0) return -1;
    if (a - b === 0) return 0;
    if (a - b > 0) return 1;
  }),
);

console.log(arraySort.sort((a, b) => a - b));
console.log(arraySort.sort((a, b) => b - a));

console.log(arraySort.reduce((res, el) => res + el, 0));

console.log(arraySort.some((el) => el % 2 === 0));
console.log(arraySort.every((el) => el % 2 === 0));
