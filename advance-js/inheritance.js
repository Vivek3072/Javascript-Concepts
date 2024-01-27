function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

Person.prototype.getFullName = function () {
  return "FULLNAME is: " + this.fName + " " + this.lName;
};
var person1 = new Person("Vivek", "Srivastava");

console.log(person1.getFullName());

function SuperHero(fName, lName) {
  // this = {}
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  return "Fighting Crime!";
};
SuperHero.prototype = Object.create(Person.prototype); //need to put it before the decalration of fightCrime to get the output on console...WHY???????

const batman = new SuperHero("Bruce", "Wayne");
console.log(batman.fightCrime());
console.log(batman.getFullName());
// batman.fightCrime; 
// batman.fightCrime();
console.log(batman.fightCrime);
