// Array Reduce Method
// 🧮 Sum of Numbers
const numbers = [24, 63, 62, 13, 46, 7];
const sumNumber = numbers.reduce((acc, curr) => {
  return acc + curr;
});
console.log(sumNumber); // 215

// 📦 Flatten Array
const nastedArr = [
  [1, 2],
  [3, 4],
];
const combineArr = nastedArr.reduce((acc, curr) => acc.concat(curr), []);
console.log(combineArr); // [1, 2, 3, 4]

// 📚 Find Longest Word
const words = ["hi", "hola", "hy"];
const maxWord = words.reduce((acc, curr) =>
  curr.length > acc.length ? curr : acc
);
console.log(maxWord); // "hola"

// 🏆 Find Highest Score
const students = [
  { id: 1, score: 56 },
  { id: 2, score: 99 },
  { id: 3, score: 77 },
];
const highest = students.reduce((acc, curr) =>
  curr.score > acc.score ? curr : acc
);
console.log(highest); // { id: 2, score: 99 }

// 🧾 Create Object from Array
const arr = ["name", "Usama", "age", 25];
const obj = arr.reduce((acc, curr, index) => {
  if (index % 2 === 0) {
    acc[curr] = arr[index + 1];
  }
  return acc;
}, {});
console.log(obj); // { name: "Usama", age: 25 }
