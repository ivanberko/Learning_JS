const Counter = function({ initialValve = 0, step = 1 }) {
  this.initialValve = initialValve;
  this.step = step;
};

Counter.prototype.increment = function() {
  this.initialValve += this.step;
};

Counter.prototype.decrement = function() {
  this.initialValve -= this.step;
};

const counter = new Counter({ initialValve: 10, step: 5 });

const counterValueField = document.querySelector(".js-counter-value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

counterValueField.textContent = counter.initialValve;

incrementBtn.addEventListener("click", () => {
  counter.increment();
  // console.log("clicked increment");
  // console.log("counter.value:", counter.initialValve);
  counterValueField.textContent = counter.initialValve;
});

decrementBtn.addEventListener("click", () => {
  counter.decrement();
  // console.log("clicked increment");
  // console.log("counter.value:", counter.initialValve);
  counterValueField.textContent = counter.initialValve;
});

console.log(incrementBtn);
console.log(decrementBtn);
console.log(counterValueField);
