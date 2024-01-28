/*
    ➜ Iterables and Iterators - What?

    ➜ An object which implements the iterable protocol is called an iterable
    ➜ For an object to be an iterable it must implement a method at the key [Symbol.iterator]
    ➜ That method should not accept any argument and should return an object which conforms to the iterator protocol
    ➜ The iterator protocol decides whether an object is an iterator
    ➜ The object must have a next() method that returns an object with two properties
    ➜ value: which gives the current element
    ➜ done: which is a boolean value indicating whether or not there are any more elements that could be iterated upon 
    ➜ This is what javascript does internally for strings, arrays, maps and sets to make them ITERABLE

    ➜ The iterator protocol structure
        const obj = {
            [Symbol.iterator]:function(){
                const iterator = {}
                return iterator;
            }
        }
*/
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (const word of obj) {
  console.log(word);
}
