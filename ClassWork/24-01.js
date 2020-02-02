/*
-----------------самовызывающаяся функция
(function start() {
  var a = (b = 4);
})();

console.log(a); // переменная а находится в локальной области видимости, если указана через var, и не видна за пределами функции
console.log(b); // без var переменная попадает в глобальную область видимости window и видна за пределами функции

*/
// =====================================================================

/*

function fn1(a, b) {
  return a + b;
}

const fn2 = function(a, b) {
  return a + b;
};

const fn3 = (a, b) => {
  return a + b;
};

*/
// =====================================================================

/*

function calcSum(a, b, fn) {
  console.log("run function");
  const sum = a + b;
  fn(sum);
}

function getConsole(param) {
  console.log("run callback");
  console.log(param);
}

calcSum(2, 3, getConsole);

*/
// =====================================================================

function sum() {
  console.log(arguments);
  const args = Array.from(arguments);
  console.log(Array.isArray(args));
  let sum = 0;
  for (const el of args) {
    sum += el;
  }
  return sum;
}

console.log(sum(1, 2, 3, 4));
