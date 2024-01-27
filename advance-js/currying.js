// Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
// function f(a,b,c) is transformed to f(a)(b)(c)

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(10)(20)(30));

const add1 = curriedSum(1);
const add2 = add1(2);
const add3 = add2(3);

console.log(add3);
