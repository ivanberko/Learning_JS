"use strict";

// Работа с колекцией------------------------------------------

const storage = {
  items: [
    { id: "id-1", name: "apples", price: 30 },
    { id: "id-2", name: "grapes", price: 40 }
  ],

  findProduct(id) {
    for (let i = 0; i < this.items.length; i++) {
      const product = this.items[i];
      if (product.id === id) {
        return product;
      }
    }
  },

  getItems() {
    return this.items;
  },

  getProductName(){
    const names = [];
    for (const item of this.items) {
      names.push(item.name);
    }
    return names;
  },

  addProduct(product) {
    this.items.push(product);
  },

  removeProduct(id) {
    for (let i = 0; i < this.items.length; i++) {
      const product = this.items[i];
      if (product.id === id) {
        console.log("i:", i);
        console.log("product:", product);
        this.items.splice(i, 1);
        return;
      }
    }
  },

  changePrice(id, price) {
    const product = this.findProduct(id);
    // guard clause, если false ВЫХОДИМ!!
    if (!product) {
      return;
    }
    product.price = price;
  }
};

console.table(storage.getItems());

storage.addProduct({ id: "id-3", name: "cherry", price: 10 });
console.table(storage.getItems());

storage.removeProduct("id-2");
console.table(storage.getItems());

storage.changePrice("id-3", 455);
console.table(storage.getItems());

console.table(storage.getProductName());

// Сделать из 2-х массивов массив объектов--------------------------

const names = ["Радар", "Сканер", "Захват", "Двигатель"];
const prices = ["1000", "1200", "3500", "7200"];

const combine = (names, prices) => {
  const combined = [];
  for (let i = 0; i < names.length; i++) {
    const obj = {
      name: names[i],
      prices: prices[i]
    };
    combined.push(obj);
  }
  return combined;
};

console.table(combine(names, prices));
