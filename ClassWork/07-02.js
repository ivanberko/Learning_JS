

// CLOSURES-------------------------------------------------------

function getCouner() {
  let counter = 0;
  return function() {
    return (counter += 1);
  };
}

const closer1 = getCouner();
const closer2 = getCouner();

console.log(closer1());
console.log(closer1());
console.log(closer1());
console.log(closer1());

console.log(closer2());
console.log(closer2());
console.log(closer2());

function test1(a) {
  return function(b) {
    return a + b;
  };
}

console.log(test1(99)(1));

const user = {
  name: 'Ivan',
  getName: function(title) {
    return `${title} ${this.name}`;
  },
};

console.log(user.getName());

const user1 = {
  name: 'Bob',
  getName: function() {
    return this.name;
  },
};

console.log(user.getName.call(user1, 'Mr.'));
