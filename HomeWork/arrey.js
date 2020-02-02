"use strict";

const arr = [1, 2, [3, 4, [5]], [6, 7]];
const arr1 = [1, 2, [3, 4, [5]], [6, 7, 8, [9]]];

const newArr = [];
const getNewArray = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "object") newArr.push(arr[i]);

    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] !== "object") newArr.push(arr[i][j]);

      for (let k = 0; k < arr[i][j].length; k++) {
        if (typeof arr[i][j][k] !== "object") newArr.push(arr[i][j][k]);
      }
    }
  }
  return newArr;
};

getNewArray(arr1);
console.log(newArr);

console.log(newArr.length);
