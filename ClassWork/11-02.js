"use strict";

/*
инкапсуляция
абстракция
наследование
полиморфизм
*/

const user1 = {
  name: "User1",
  gender: "male",
  age: 23
};

function CreateUsers(name, age, position, gender) {
  this.name = name;
  this.age = age;
  this.position = position;
  this.gender = gender;

  this.getInfo = function() {
    return `${this.name} - ${this.position}`;
  };
}

const user2 = new CreateUsers("User1", 24, "PM", "male");
const user3 = new CreateUsers("User3", 45, "Front End", "famale");

console.log(user2);
console.log(user3);
console.log(user3.getInfo());

function CreateCar(model, mark, engineVolume, year, color, maxSpeed, power) {
  this.model = model;
  this.mark = mark;
  this.engineVolume = engineVolume;
  this.year = year;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.power = power;
  this.engineStatus = false;
  this.currentSpeed = 0;

  this.startEngine = function() {
    this.engineStatus = true;
  };

  this.stopEngine = function() {
    this.engineStatus = false;
  };

  this.accelerate = function(speed) {
    if (this.engineStatus) {
      this.currentSpeed =
        this.currentSpeed + speed <= this.maxSpeed
          ? (this.currentSpeed += speed)
          : this.maxSpeed;
    }
  };

  this.brake = function() {
    this.currentSpeed = 0;
  };

  this.decreaseSpeed = function(speed) {
    if (this.engineStatus && this.currentSpeed - speed >= 0)
      this.currentSpeed -= speed;
  };

  this.getCurrentSpeed = function() {
    return this.currentSpeed;
  };
}

const myCar = new CreateCar("X7", "BMW", 4.4, 2020, "white", 240, 330);

myCar.startEngine();
myCar.accelerate(50);
myCar.accelerate(100);
myCar.accelerate(100);
myCar.decreaseSpeed(200);
myCar.brake();
myCar.stopEngine();

console.log(myCar.getCurrentSpeed());
console.log(myCar);
