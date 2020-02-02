"use strict";
// while------------------------------------------------------------------
let i = 0;

const fruit = ["apple", "grape", "banana"];

while (i < fruit.length) {
  console.log(fruit[i]);
  i++;
}

console.log("Цикл закончен");

// do ... while -------------------------------------------------------------
/*let userImput;

do {
  userImput = prompt("Вводи число 10!");
  console.log(userImput);
  // Выполнять до тех пор пока не равно null и не равно 10
} while (userImput !== null && Number(userImput) !== 10);*/

/* usreInput = null
null !== null || Number(null) !== 10
false || true -> true

usreInput = 10
10 !== null || Number(10) !== 10
true || false -> true

usreInput = null
null !== null && Number(null) !== 10
false && true -> false

usreInput = 10
10 !== null && Number(10) !== 10
true && false -> false */

// FOR--------------------------------------------------------------------

for (let i = 0; i < fruit.length; i++) {
  console.log("i: ", i);
  console.log(`fruit[${i}]`, fruit[i]);
}

// FOR OF-----------------------------------------------------------------
// Перебор массива по значению, не меняет исходный массив
const numbers = [1, 2, 3, 4, 5, 6];

for (let number of numbers) {
  console.log(number);
}

// Цикл в цикле-----------------------------------------------------------

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
  console.group(`Iteration ${i}`);
  console.log("i : ", i);
  console.log(`matrix[${i}] :`, matrix[i]);
  for (let j = 0; j < matrix[i].length; j++) {
    console.log("j : ", j);
    console.log(`matrix[${i}][${j}] :`, matrix[i][j]);
  }
  console.groupEnd(`Iteration ${i}`);
}

// Найти самое длинное слово в строке---------------------------------------
const message =
  "Lorem ipsum dolor sit ametr consectetur adipisicing elit Reprehenderit ratione";
const words = message.split(" ");
console.log(words); // (10) ["Lorem", "ipsum", "dolor", "sit,", "amet", "consectetur", "adipisicing", "elit.", "Reprehenderit,", "ratione?"]
let longestWord = words[0];

for (let word of words) {
  console.log(word);
  if (word.length > longestWord.length) {
    longestWord = word;
    console.log(longestWord);
  }
}
console.log(`Самое длинное слово в строке : ${longestWord}`);

// Найти слово у которого с права слово длиной 4 символа, а с права 5 символов

const leftCount = 5;
const rightCount = 3;
let target;

for (let i = 1; i < words.length - 1; i++) {
  console.log(words[i]);
  if (words[i - 1].length === leftCount && words[i + 1].length === rightCount) {
    target = words[i];
  }
}

console.log(`Слово между словами из 5-ю и 3-х символов: ${target}`);
