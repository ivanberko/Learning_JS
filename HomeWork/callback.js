"use strict";

// Функия высшего порядка - это функция которая или принамает функцию в виде аргумента или возвтщает функцию.

const cB = callback => {
  callback();
};

const x = function() {};

cB(x);

//=========================================================================
const lables = [];

function reapet(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}

const createLable = index => {
  lables.push(`Label ${index + 1}`);
};

reapet(5, createLable);
console.log(lables);

// FUNCTION FILTER =========================================================================

const filter = function(array, callback, n) {
  const result = [];
  for (const el of array) {
    if (callback(el, n)) {
      result.push(el);
    }
  }
  return result;
};

const fnGt3 = (el, n) => {
  return el >= n;
};

console.log(
  filter([14, 2, 33, -4, 25, 3, 43, 34, 12, 12, 67, 23, 45, 345], fnGt3, 47)
);

// THIS =========================================================================

const product = {
  name: "Goga",
  showName() {
    console.log(this);
    console.log(this.name);

    const fn = () => {
      // => функция получет this от родителя, во время её объявления (создания) и запоминает его.
      console.log(this);
    };
    fn(); // поэтому во время её вызова, this будет ссылаться на this.showName (у которого this product)

    /*

    const fn () {  // получет свой контекст во время её вызова, тоесть ниже.
      console.log(this);
    };
    fn(); // функция вызвана без контекста объекта, поэтому undefined (use strict) или window (в не строгом)

    */
  }
};

product.showName();

// CALL, APPLY==================================================================== вызывается в данный момент времени (здесь и сейчас)

const sell = function(prop, price) {
  console.log(`Manager ${this.name} sold ${prop} for ${price}$`);
  this.sales += 1;
};

const mango = {
  name: "Mango",
  sales: 23
};

const poly = {
  name: "Poly",
  sales: 54
};

sell.call(mango, "TV", 102); // в методе call указывает в контексте какого объекта ссылаться на this (первый аргумент)
sell.call(poly, "PC", 23);

sell.apply(mango, ["TV", 102]); // аналог call, но агрументы принимает в виде массива
sell.apply(poly, ["PC", 23]);

// BIND ================================================================== для сохранения контекста в функции, для вызова её в будущем

const market = {
  label: "Adidas",
  showName() {
    console.log(this);
    console.log(this.label);
    return this.label;
  }
};

const printLabel = function(callback) {
  const label = callback();
  console.log(`Market lable : ${label}`);
};

printLabel(market.showName.bind(market));
