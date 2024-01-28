// // NESTED FUNCTIONS HAVE ACCESS TO VARIABLES DECLARED IN THEIR OWN SCOPE AND ALSO TO THE VARIABLSE OUT OF THEIR SCOPE
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     a = 40;
//     b = 50;
//     console.log(a, b, c);
//     // return a + b;
//   }
//   inner();
// }
// outer();

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }

// outer(); // 1
// outer(); // 1

//CLOSURE
// In JavaScript, when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function and its scope chain is what is called a closure in JavaScript.
/*
  ➜ A Closure is created when a function is returned from another function
  ➜ In such situation Javascript doesn't only returns the inner function as well as it returns its scope
  ➜ Function inner bundled together with the counter variable together is termed as closure and in such situations the function will persist and remember the value of counter variable

*/
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const ans = outer();
ans(); // 1
ans(); // 2
