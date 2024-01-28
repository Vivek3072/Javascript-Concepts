class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  getFullName() {
    return this.fName + " " + this.lName;
  }
}
const person = new Person("Vivek", "Srivastava");
console.log(person.getFullName());

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }
  getPower() {
    // return "GOD OF THUNDER!";
    return console.log("GOD OF THUNDER!");
  }
}
const thor = new SuperHero("Chris", "Hemsworth");
console.log("FULLNAME OF SUPERHERO - " + thor.getFullName()); //using getFullName method of the parent class as per inherited property
// console.log("POWER OF SUPERHERO - " + thor.getPower());
console.log("POWER OF SUPERHERO - ");
thor.getPower();

// function Person(fName, lName) {
//   this.fName = fName;
//   this.lName = lName;
// }

// Person.prototype.getFullName = function () {
//   return "FULLNAME is: " + this.fName + " " + this.lName;
// };
// var person1 = new Person("Vivek", "Srivastava");

// console.log(person1.getFullName());

// function SuperHero(fName, lName) {
//   // this = {}
//   Person.call(this, fName, lName);
//   this.isSuperHero = true;
// }

// SuperHero.prototype = Object.create(Person.prototype);
// SuperHero.prototype.fightCrime = function () {
//   return "Fighting Crime!";
// };

// const batman = new SuperHero("Bruce", "Wayne");
// console.log(batman.getFullName());
// console.log(batman.fightCrime());
