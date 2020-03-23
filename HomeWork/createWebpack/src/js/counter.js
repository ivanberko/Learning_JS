export default class Timer {
  constructor({ element, initValue = 0, step = 1 }) {
    this.value = initValue;
    this.step = step;
    this.refs = {
      decBtn: element.querySelector('button[data-action="decrement"]'),
      incBtn: element.querySelector('button[data-action="increment"]'),
      clocface: element.querySelector('div.value'),
    };
    this.updateClocface();
    this.bintEvent();
  }
  increment() {
    this.value += this.step;
    this.updateClocface();
  }
  decrement() {
    this.value -= this.step;
    this.updateClocface();
  }
  updateClocface() {
    this.refs.clocface.textContent = this.value;
  }
  bintEvent() {
    this.refs.decBtn.addEventListener('click', this.decrement.bind(this));
    this.refs.incBtn.addEventListener('click', this.increment.bind(this));
  }
}

