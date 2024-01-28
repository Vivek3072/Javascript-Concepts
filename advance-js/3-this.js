// The javascript this keyword which is used in a function refers ti the object it belongs to
// It makes the function reusable by letting you decide the object value
// The value is determined entirely by how the function is called

/*
    ➜ ORDER OF PRECEDENCE
    1. NEW BINDING
    2. EXPLICIT BINDING
    3. IMPLICIT BINDING
    4. DEFAULT BINDING
*/

/*
    RULE 1. IMPLICIT BINDING 

    ➜ It states that when a function is invoked with the dot notation then the object to the left of the dot is what this keyword will point to
*/
const person = {
  name: "Vivek",
  title: "Srivastava",
  sayMyName: function () {
    console.log("My name is :", this.name); // Here this.name is treated as person.name as we have IMPLICIT BINDING RULE VALID IN THE FUNCTION CALL
  },
};
person.sayMyName();

/*
    RULE 2. EXPLICIT BINDING

    ➜ This comes when a function is called with with built in call method .call()
    ➜ The first argument passed to call is what "this" inside sayMyName is referencing

*/
function sayMyName() {
  console.log("My title is :", this.title);
}
sayMyName.call(person);

/*
    RULE 3. NEW BINDING

    ➜ In js we can invoke a function with new keyword
    ➜ In such situations functionn in invoked with this keyword referencing an empty object
    ➜ The new keyword internally does this when funcion Person is invoked with the new keyword
*/

function Person(name) {
  // this = {}  we are not creating this, the new keyword internally does this when funcion Person is invoked with the new keyword
  this.name = name;
}

const p1 = new Person("Monu");
const p2 = new Person("Sonu");
console.log(p1.name);
console.log(p2.name);

/*
    RULE 4. DEFAULT BINDING

    ➜  This is a fallback case of binding i.e, when none of the other above cases match then Default Binding will occur.
    ➜  Here this keyword depends on the global scope
    ➜  As we are calling the function without any of the above defined method then this will look for the variable in global scope
*/
globalThis.name = "Superman";
function sayMyName() {
  console.log("My name is ", this.name);
}
sayMyName();
