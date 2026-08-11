// Variable Declaration
const firstName = "Ada";
// firstName = "Abdulrazaq";
console.log("First Name:", firstName);

let age = 20;
age = 21;

console.log("Age:", age);

// Data Types
const lastName = "Chukwuka"; // string
const numberOfRooms = 4; // number
const isRazaqSleepy = false; // boolean
let fullName; // undefined

console.log("Full Name:", fullName);

const maidenName = null; // null

console.log("Maiden Name:", maidenName);

const userData = {
  firstName: "Abdulrazaq",
  age: 38,
  sleepy: true,
  slowToday: true
}; // object

console.log('User Data', userData);

console.log('userData.firstName', userData.firstName);

console.log('userData.age', userData.age);

// Template Literals
console.log('My name is ' + userData.firstName + ', and I am ' + userData.age + ' years old.');

// Using backticks
console.log(`My name is ${userData.firstName}, and I am ${userData.age} years old.`);

// Operators
const a = 12;
const b = 4;
let c = 5;
const d = "4";

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % c =", a % c);
console.log('c += 6 =', c += 6); // c += 6 -> c = c + 6
console.log('c -= 6 =', c -= 6); // c -= 6 -> c = c - 6
console.log('c *= 6 =', c *= 6); // c *= 6 -> c = c * 6
console.log('c /= 6 =', c /= 6); // c /= 6 -> c = c / 6
console.log('c++', c++); // c + 1, but log c before adding
console.log('c--', c--); // c - 1, but log c before subtracting
console.log(c);
console.log('++c', ++c); // c + 1, add 1 before logging
console.log('--c', --c); // c - 1, subtract 1 before logging

console.log('Is b equal to d?', b == d); // true
console.log('Is b equal to d?', b === d); // false

const newObj = { plus: a + b, minus: a - b, times: a * b, divide: a / b };

console.log(newObj);