"use strict";

const arr = [1, 2, [3, 4, [5]], [6, 7]];
const arr1 = [1, 2, [3, 4, [5]], [6, 7, 8, [9]]];

// const newArr = [];
// const getNewArray = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "object") newArr.push(arr[i]);

//     for (let j = 0; j < arr[i].length; j++) {
//       if (typeof arr[i][j] !== "object") newArr.push(arr[i][j]);

//       for (let k = 0; k < arr[i][j].length; k++) {
//         if (typeof arr[i][j][k] !== "object") newArr.push(arr[i][j][k]);
//       }
//     }
//   }
//   return newArr;
// };

function closer() {
  const resultArr = [];
  return function flatArr(array) {
    for (const el of array) {
      if (!Array.isArray(el)) {
        resultArr.push(el);
      } else {
        flatArr(el);
      }
    }
    return resultArr;
  };
}

const flat = closer();

console.log(flat(arr1));

/*
function flatArr(array) {
  let resultArr = [];
  for (const el of array) {
    if (!Array.isArray(el)) {
      resultArr.push(el);
    } else {
      resultArr = resultArr.concat(flatArr(el));
    }
  }
  return resultArr;
}

console.log(flatArr(arr1));
*/