"use strict";

/* Object
2. Вычисляемые свойства и методы объекта подробнее ???????????
3. this
4. область применения, пример для Object.entries()
5. if .. in ? возвращает true или false, для проверки key в object

*/

const value = 32;
const fullName = "Berko";
const age = "userAge";

const user = {
  name: "Ivan",
  role: "admin",
  friends: [],
  "favorite movie": "Avatar",
  [age]: value,
  fullName,
  test: undefined
  // getName(){
  //   return this.name
  // }
};

// console.log(user.getName());

function getName() {
  return this;
}

console.log(getName.call(user)); // вызов функции если она объявленна как => не работет в методе call()

user.country = "Ukraine";
console.log(user.gender);

console.log(user);
console.log(user.role);
console.log(user["favorite movie"]);

console.log("test" in user);
console.log("qwe" in user);

const findProp = (prop, obj) => {
  if (prop in obj) {
    return obj[prop];
  }
  return "Prop not found";
};

console.log(findProp("fullName", user));

/*
const objToConsole = (object) => {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`${key} - ${object[key]}`);
    }
  }
}

objToConsole(user);
*/

/*
const objToConsole = (object) => {
console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));
}

objToConsole(user);
*/

// Object.assign--------------------------------------------------------------
/*
const first = {
  name: "John",
  age: 23,
};
const second = {
  role: 'admin'
};
const third = {
  friend: "Ann",
  age: 34
};

const objToConsole = (obj1, obj2, obj3) => {
  return Object.assign({}, obj1, obj2, obj3); // первое значение указывает на object место для записи
};

console.log(objToConsole(first, second, third));

*/
