/*
    ➜ GENERATORS       

    ➜ Generator functions are used to generate iterables for us without letting us to write the whole syntax of iterators
*/

function normalFun() {
  console.log("Hello");
  console.log("World");
}
// normalFun();
// normalFun();

function* generatorFunction() {
  yield "Vivek";
  yield "Srivastava";
}

const generatorObject = generatorFunction();
for (const word of generatorObject) {
  console.log(word);
}
