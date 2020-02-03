"use strict";

const manager = function(name, sales) {
  //this = {} при создании new конструктора создается новый пустой объект
  this.name = name;
  this.sales = sales;
  // return this
};

const mango = new manager("Mango", 23);
console.log(mango);
const poly = new manager("Poly", 54);
console.log(poly);
