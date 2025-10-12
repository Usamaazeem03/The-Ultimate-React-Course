// Array Sort Method
const arr = [9, 2, 5, 1];
const ascending = arr.sort((a, b) => a - b);
const descending = arr.sort((a, b) => b - a);
console.log(ascending);
console.log(descending);

const furit = ["banana", "apple", "orange"];
const ascenFurit = furit.sort((a, b) => a.localeCompare(b));
console.log(ascenFurit);

const great = ["hi", "hello", "hey"];
const sortlen = great.sort((a, b) => a.length - b.length);

const user = [
  { name: "Usama", age: 25 },
  { name: "Ali", age: 20 },
];
const ageSort = user.sort((a, b) => a.age - b.age);
