function Person(name, age) {
  this.name = name;
  this.age = age;
}

/*
    ➜ Now, let's add a function called greet to the Person function's prototype

    ➜ This function will now be available to all objects created using the Person function as their constructor. Here's how we can create an object and use the greet function:

    ➜ By using the prototype, we have created a shared greet function that all objects created with the Person function can use. This can be more efficient than creating a separate greet function for each object.

    ➜ A function that is used with a new keyword is called a CONSTRUCTOR function
*/
Person.prototype.greet = function () {
  console.log(
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};
var person1 = new Person("Vivek", 23);
var person2 = new Person("John", 25);
person1.greet();
person2.greet(); // Outputs: Hello, my name is John and I am 25 years old.

person1.getFullName = function () {
  return this.name + " has now become " + this.age;
};
console.log(person1.getFullName());
// console.log(person2.getFullName()); // this throws error because we have defined getFullName only in person1's prototype
