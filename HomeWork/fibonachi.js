"use strict";
// ФИБОНАЧЧИ

// let A = 10;
// let n = 2;
// let a = n - 2;
// let b = n - 1;
// let Fib;

// for (n; n <= A; n++) {
//   Fib = a + b;
//   a = b;
//   b = Fib;
//   console.log(Fib);
// }

const fib = function(A) {
  let F;
  let a = 0;
  let b = 1;
  let n = 2;
  return function fibonachi() {
    F = a + b;
    a = b;
    b = F;
    n += 1;
    console.log(F);
    if (n > A) {
      return;
    }

    fibonachi();
  };
};

const result = fib(10);

result();

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// console.log(fib(10));
