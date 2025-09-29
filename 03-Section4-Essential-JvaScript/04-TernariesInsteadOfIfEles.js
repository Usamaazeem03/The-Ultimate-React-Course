// Ternary Operator
// Even or Odd
const number = 6;
const result = number % 2 === 0 ? "Even" : "Odd";
console.log(`${number} is ${result}`); // 6 is Even

// Age Check
const age = 22;
const canAdult = age >= 18 ? "adult" : "minor";
console.log(`At age ${age}, you are a ${canVote}.`); // At age 22, you can vote.

// Login Status
const isLoggedIn = true;
const status = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(status); // Welcome back!

// Discount Status
const price = 1000;
const discount =
  price >= 1000 ? "You get a discount!" : "No discount available.";
console.log(discount); // You get a discount!

// Temperature Check
const temp = 30;
const weather = temp > 30 ? "its hot day" : "its cold day";
console.log(weather); // its cold day

// Max Number
const a = 10;
const b = 20;
const max = a > b ? a : b;
console.log(`The maximum number is ${max}`); // The maximum number is 20

// Pass or Fail
const marks = 75;
const resultStatus = marks >= 50 ? "Pass" : "Fail";
console.log(`You ${resultStatus} the exam.`); // You Pass the exam.

// Nested Ternary - Grading System
const gradeStatus = marks >= 80 ? "A" : marks >= 60 ? "b" : "C";
console.log(`Your grade is ${gradeStatus}`); // Your grade is A
