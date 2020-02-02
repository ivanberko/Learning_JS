"use strict";

/*
// SPRAD ----------------------------------------------------- распыляет массив, делает копию массива

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrNum2 = [...arrNum];

const joinArr = [...arrNum, ...arrNum2];
const newArr = [23, ...joinArr, 21];
arrNum2.pop();

const result = Math.max(...arrNum);
const result1 = Math.max(...newArr);
console.log(result);
console.log(result1);
console.log(joinArr);

const arr = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr;
console.log(c);
*/

/*
// REST -----------------------------------------------------собирает все или часть значений в массив

const getArgs = (double, ...rest) => {
  console.log(double);
  console.log(rest);
  console.log(Array.isArray(rest));
  for (const el of rest) {
    console.log(el * double);
  }
};

getArgs(2, 3, 5, 7, 9);
*/

// Деструктуризация

const user1 = {
  name: "Ivan",
  // age: 32,
  friend: [1, 2, 3, 4],
  parents: {
    mom: "Nat",
    dady: "john"
  }
};

const {
  name = "Jack",
  age: old = 43,
  friend,
  parents // :{ mom, dady } - если разобрать ключ на переменные, то обратиться к parents не получится.
  //Нужно отдельно через const задать переменные значениям parents (см. ниже)
} = user1;

console.log(friend);

const { mom, dady } = parents; // ВОТ ТАК, в таком случае можем обратиться к parents, в переменной выше.
console.log(mom);

const user2 = {
  gender: "man"
};

const copyUser1 = { ...user1 };

const copyUser2 = { ...user1, ...user2 };

console.log(copyUser1);
console.log(copyUser1 === user1);
console.log(copyUser2);
