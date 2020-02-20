"use strict";

// MAP---------------------------------------------------------------------------------------------------------------------

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

let map = new Map();
map.set("1", "num");
map.set(1, "num1");
map.set(true, "bool1");
console.log(map);
console.log(map.size);
console.log(map.get(1));

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

let obj = {
  name: "John",
  age: 30
};

let mapOfObj = Array.from(new Map(Object.entries(obj)));
console.log(mapOfObj); // Map(2) {"name" => "John", "age" => 30} ????????????????????????

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4]
]);

console.log(prices);

// SET---------------------------------------------------------------------------------------------------------------------

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.size);

for (let user of set) {
  console.log(user.name);
}

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];

console.log(unique(values));

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let result = new Map();

  for (let elem of arr) {
    let sort = Array.from(elem)
      .sort()
      .toString()
      .toUpperCase();
    if (!result.has(sort)) {
      result.set(sort, elem);
    }
  }

  return Array.from(result.values());
}

console.log(aclean(arr));
