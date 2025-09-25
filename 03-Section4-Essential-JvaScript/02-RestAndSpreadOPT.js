// Reat and Spread Operators
// Rest Operator Tasks
// Create an array of 6 numbers → destructure the first two numbers and collect the rest into a new array.
const numbers = [1, 2, 3, 4, 5, 6];
const [a, b, ...reat] = numbers;
console.log(a, b); // 1 2
console.log(reat); // [3, 4, 5, 6]
// From an object { id, name, age, country }, take only id and collect the rest into another object.
const obj = { id: 1, name: "Usama", age: 20, country: "Pakistan" };
const { id, ...abc } = obj;
console.log(id); // 1
console.log(abc); // { name: 'Usama', age: 20, country: 'Pakistan' }
// Write a function that accepts any number of arguments and collects them using rest (...args).
function collectArgs(...args) {
  return args;
}
console.log(collectArgs(1, 2, 3)); // [1, 2, 3]
console.log(collectArgs("a", "b", "c", "d")); // ['a', 'b', 'c', 'd']

// Destructure a nested array so that the first element goes into one variable and the rest of the elements from the inner array go into another variable.
const nestedArray = [1, [26, 33, 45, 39, 55], 5];
const [first, [innerFirst, ...rest], last] = nestedArray;
console.log(first); // 1
console.log(rest); // [ 33, 45,39,55]
console.log(last); // 5
// From an array of strings, collect the last three elements using rest.
const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
const [...lastThree] = stringArray.slice(-3);
console.log(lastThree); // ['cherry', 'date', 'elderberry']

// Spread Operator Tasks
// Merge two arrays [1, 2, 3] and [4, 5, 6] into one.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]
// Copy an object { a:1, b:2 } into a new object using spread.
const originalObj = { a: 1, b: 2 };
const copiedObj = { ...originalObj };
console.log(copiedObj); // { a: 1, b: 2 }
// Combine two objects { a:1, b:2 } and { b:3, c:4 } and check the final value of b.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 3, c: 4 }
console.log(combinedObj.b); // 3
// Create a new array by spreading an existing array and adding extra elements at the beginning and end.
const baseArr = [2, 3, 4];
const newArr = [1, ...baseArr, 5];
console.log(newArr); // [1, 2, 3, 4, 5]
// Write a function that takes an array and calls another function with the array elements spread as arguments.
function callWithSpread(arr, func) {
  return func(...arr);
}
function sum(a, b, c) {
  return a + b + c;
}

console.log(callWithSpread([1, 2, 3], sum)); // 6
console.log(callWithSpread([4, 5, 6], sum)); // 15
