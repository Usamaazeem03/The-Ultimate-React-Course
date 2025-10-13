// Immutable Arrays
// Q1: Add the number 10 to the end of the array without changing the original.
const numbers = [1, 2, 3, 4, 5];
const nextNum = 6;
const fullNumbers = [...numbers, nextNum];
console.log(fullNumbers); // [1, 2, 3, 4, 5, 6]

// Q2: Remove the first element from the array without mutating it.
const items = ["apple", "banana", "cherry"];
const delFirst = items.slice(1);
console.log(delFirst); // ["banana", "cherry"]
console.log(items); // ["apple", "banana", "cherry"] (original unchanged)

// Q3: Replace "banana" with "orange" without mutating the original array.
const fruits = ["apple", "banana", "cherry"];
const newFruits = fruits.map((fruit) =>
  fruit === "banana" ? "orange" : fruit
);

console.log(newFruits); // ["apple", "orange", "cherry"]
console.log(fruits); // ["apple", "banana", "cherry"] (original safe ✅)

// // Q4: Merge arr1 and arr2 into a new array without changing the originals.
const arr1 = [1, 2];
const arr2 = [3, 4];

const mergedArr = [...arr1, ...arr2];

console.log(mergedArr); // [1, 2, 3, 4]
console.log(arr1); // [1, 2] (original safe ✅)
console.log(arr2); // [3, 4] (original safe ✅)
