"use strict";

const users = [
  { id: "id-01", tag: "Mango", isOnline: true, rang: 800 },
  { id: "id-02", tag: "Poly", isOnline: false, rang: 300 },
  { id: "id-03", tag: "Ajax", isOnline: true, rang: 500 },
  { id: "id-04", tag: "Kiwi", isOnline: false, rang: 900 },
  { id: "id-05", tag: "Alfa", isOnline: true, rang: 200 }
];

// SORT ------------------------------------------------------------------------------------------------
// метод SORT изменяет основной массив
const sortedUsers = [...users].sort((prev, next) => {
  // по возрастанию занчения свойства
  // return prev.rang - next.rang;

  // по возрастанию занчения свойства
  return next.rang - prev.rang;
});

console.log(sortedUsers);
console.log(users);

// FILTER ------------------------------------------------------------------------------------------------

const numbers = [1, 2, 4, 6, 8, 45, 455, 344, 89, 34, 2, 5, 64];

const filter = (arr, callback) => {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    const passed = callback(arr[i]);
    if (passed) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

console.log(
  filter(numbers, number => number > 20).sort((prev, next) => {
    return prev - next;
  })
);

console.log(
  filter(numbers, number => number < 100).sort((prev, next) => {
    return prev - next;
  })
);

// FIND ------------------------------------------------------------------------------------------------

const find = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
    const passed = callback(arr[i]);
    if (passed) {
      return arr[i];
    }
  }
};

console.log(find(numbers, number => number > 20));

// REDUCE ------------------------------------------------------------------------------------------------

const reduce = (array, callback, initialValve) => {
  let accumulator = initialValve;
  for (let i = 0; i < array.length; i += 1) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
};

console.log(
  reduce(
    numbers,
    (acc, number) => {
      return acc + number;
    },
    0
  )
);
