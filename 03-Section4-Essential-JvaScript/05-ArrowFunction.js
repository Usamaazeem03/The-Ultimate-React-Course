//Arrow Function
// Simple Return
const multiply = (num) => num * 2;
console.log(multiply(5)); // 10

// Addition
const sum = (a, b) => a + b;
console.log(sum(4, 2)); // 6

// Greeting
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Usama")); // Hello, Usama!

// Square of Numbers
const arrFunc = (arr) => arr.map((num) => num * num);
console.log(arrFunc([1, 2, 3, 4])); // [1, 4, 9, 16]

// Even or Odd
const isEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(isEven(4)); // Even
console.log(isEven(7)); // Odd

// Maximum of Two Numbers
const max = (a, b) => (a > b ? a : b);
console.log(max(10, 5)); // 10
console.log(max(3, 8)); // 8

// Count Characters
const countChars = (str) => str.length;
console.log(countChars("Hello")); // 5
console.log(countChars("JavaScript")); // 10

// Convert to Uppercase
const toUpperCase = (str) => str.toUpperCase();
console.log(toUpperCase("hello")); // "HELLO"
console.log(toUpperCase("javascript")); // "JAVASCRIPT"

// Filter Numbers
const filterNumbers = (arr) => arr.filter((num) => num > 10);
console.log(filterNumbers([5, 12, 8, 20, 3])); // [12, 20]

// Object Return
const createUser = (id, name) => ({ id, name });
console.log(createUser(1, "Usama")); // {id: 1, name: "Usama"}
console.log(createUser(2, "Ali")); // {id: 2, name: "Ali"}
