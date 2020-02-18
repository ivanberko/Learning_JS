"use strict";

// Публичные и приватные свойства и методы экземпляров

/*
 function Rabbit() {}
 Rabbit.prototype = {eats: true};
 let rabbit = new Rabbit();
 Rabbit.prototype = {};
 alert(rabbit.eats); // почему вернут true ?
 */

class User {
  constructor(name, age, sex) {
    this._name = name;
    this.age = age;
    this.sex = sex;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  sayHi() {
    alert(this.name);
  }

  sayAge() {
    alert(this.age);
  }
}

let user = new User("Ivan", 34, "male");

console.log(user.name);
user.name = "Vano";
console.log(user.name);

class Animal {
  static getDiff(rabbit1, rabbit2) {
    return rabbit1.age - rabbit2.age;
  }

  static createBigRabbit() {
    return new this("Crazy rabbit");
  }
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  run(value) {
    this.speed = value;
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  hide() {
    super.run(55);
    console.log(`${this.name} is hidden`);
  }
}

const rabbitW = new Rabbit("White rabbit", 10);
console.log(rabbitW);
rabbitW.hide();
console.log(rabbitW);

const rabbitB = new Rabbit("Black rabbit", 23);
console.log(Animal.getDiff(rabbitB, rabbitW));
console.dir(rabbitB);

const crazyRabbit = Animal.createBigRabbit();
console.log(crazyRabbit instanceof Animal);

const tree = {
  sleep() {
    console.log(`I am sleeping`);
  }
};
Object.assign(Animal.prototype, tree);
rabbitB.sleep();
