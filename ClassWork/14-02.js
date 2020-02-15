"use strict";

// [[prototype]] - скрытое свойство объекта
// __proto__ - это get и set для свойства [[prototype]]
// .prototype - свойство функции конструктор
/*
const animal = {
  walk: function() {
    alert("animal is walking");
  }
};

const rabbit = {
  eat: function() {
    alert("rebbit eats carrot");
  }
};

rabbit.__proto__ = animal;
rabbit.eat();
rabbit.walk();

console.log(rabbit);

for (const key in rabbit) {
  if (rabbit.hasOwnProperty(key)) { // проверят является ли ключи собственными, иначе будет перебирать ключи из наследования
    console.log(key);
  }
}

*/

const animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("Write Rabbit");

const house = {
  flat: 134
};

const arr = [];

const fn = function() {};

console.dir(fn);

// const collaction;   // для копирования методов массивов для перебора коллекции

// collaction.map = Array.prototype.map;
// collaction.map = [].map;



