"use strict";
// ФИБОНАЧЧИ

let A = 10;
let n = 2;
let a = n - 2;
let b = n - 1;
let Fib;

for (n; n <= A; n++) {
  Fib = a + b;
  a = b;
  b = Fib;
  console.log(Fib);
}