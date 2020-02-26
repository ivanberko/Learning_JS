/* const arr = [1,2,3,4,];

console.log(arr.pop());
console.log(arr.push(7));

console.log(arr.shift())
console.log(arr.unshift(31))

console.log(arr) */

// =====================================================================

/* const arr = new Array(10); // создает массив с 10-ю элементами со значениями undefined

for (let i = 0; i < arr.length; i += 1) {
  arr[i] = i * 2;
}
console.log(arr);
console.table(arr); */

// =====================================================================

/* const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
  console.group(`Iteration ${i}`);
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] % 3 === 0) {
      console.log(matrix[i][j])
    }
  }
  console.groupEnd(`Iteration ${i}`);
} */

// =====================================================================

/* const numbers = new Array(10);
for (let i = 0; i < numbers.length; i += 1) {
  numbers[i] = i * 2;
}

for (const number of numbers) {
  console.log(number);
} */

// =====================================================================
