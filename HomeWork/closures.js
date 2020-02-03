"use strict";

// ЗАМЫКАНМЕ--------------------------------------------

function urlGenerator(domain) {
  return function(url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator("com");
const uaUrl = urlGenerator("ua");

console.log(comUrl("google"));
console.log(comUrl("youtube"));

console.log(uaUrl("news"));
console.log(uaUrl("robota"));

// Пишим метод BIND

function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Mango", age: 34, job: "developer" };
const person2 = { name: "Poly", age: 23, job: "designer" };

bind(person1, logPerson)();
bind(person2, logPerson)();
