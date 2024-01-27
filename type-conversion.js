// // IMPLICIT TYPE CONVERSIONS

// // WITH ADDITION ITS BEHAVING AS A STRING
// console.log(2 + '3')
// console.log(true + '3')

// // WITH SUBSTRACTION, MULTIPLICATION, DIVISION ITS BEHAVING AS A STRING
console.log("4" - "2");
console.log(4 - "2");
console.log("2" * "4");
console.log(null * "4");
console.log("20" / "4");

// console.log('Bruce' - 'Wayne')

// console.log('5' - true)
// console.log('4' - false)
// console.log('5' + true)
// console.log('4' + false)

// // EXPLICIT TYPE CONVERSIONS
// console.log(Number('5'))
// console.log(Number(false))
// console.log(Number(''))

// console.log(parseInt('5'))
// console.log(parseFloat('5.44'))

const var1 = 10;
const var2 = "10";
console.log(var1 == var2); // ALOOWS  TYPE COERCION
console.log(var1 === var2); // DOES NOT ALOOWS  TYPE COERCION

/*
  SCOPE of variables
   - Block Scope
   - Function scope
   - Global Scope
*/

var a = 10;
if (true) {
  a = 5;
  console.log(a);
}

function square() {
  a = 8;
  console.log(a * a);
}
square();

console.log(a);
