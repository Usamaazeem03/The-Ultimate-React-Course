// Array Filter Method
// Filter Even Odd Numbers
const numbers = [1, 2, 5, 6, 8, 9, 4, 2, 3, 4, 1];
const evenNum = numbers.filter((num) => num % 2 == 0);
const oddNum = numbers.filter((num) => num % 2 == 1);
console.log(evenNum); // [2, 6, 8, 4, 2, 4]
console.log(oddNum); // [1, 5, 9, 3, 1]

// Filter Ages Above 18
const ages = [24, 35, 22, 11, 2, 34];
const adultsAges = ages.filter((years) => years > 18);
console.log(adultsAges); // [24, 35, 22, 34]

// Filter Short Words
const words = ["hola", "Usama", "Java", "cat"];
const fewerWords = words.filter((word) => word.length, 4);
console.log(fewerWords); // ["cat"]

// Filter by First Letter
const nameArr = ["usama", "ali", "alix", "khan"];
const firstA = nameArr.filter((name) => name[0] === "a");
console.log(firstA); // ["ali", "alix"]

// Filter Products In Stock
const prodcts = [
  { name: "mobile", stock: "inStock" },
  { name: "book", stock: "outStock" },
];
console.log(prodcts.filter((item) => item.stock === "inStock")); //// [{ name: "mobile", stock: "inStock" }]
