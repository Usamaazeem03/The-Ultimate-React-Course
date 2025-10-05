// Array Map Method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
multiNumber = numbers.map((num) => num * 10);
console.log(multiNumber); // [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

const names = ["usama", "ali", "khan"];
const uppercaseName = names.map((name) => name.toUpperCase());
console.log(uppercaseName); // ["USAMA", "ALI", "KHAN"]

const words = ["hi", "hola", "hello"];
const wordsLen = words.map((word) => word.length);
console.log(wordsLen); // [2, 4, 5]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const booleanArr = numbers.map((num) => (num % 2 === 0 ? "even" : "odd"));
console.log(booleanArr);
// ["odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even"]

const prices = [12, 34, 52, 55, 13, 74];
const formattedPrice = prices.map((pri) => `$${pri}`);
console.log(formattedPrice);
// ["$12", "$34", "$52", "$55", "$13", "$74"]

const idName = [{ id: 1, name: Usama }];
const nameObj = idName.map((item) => item.name);
console.log(nameObj); // ["Usama"]

// const names = ["usama", "ali", "khan"];
const appendsArr = names.map((name) => name + "👏");
console.log(appendsArr);
// ["usama👏", "ali👏", "khan👏"]

const birthYears = [1990, 1995, 2002, 2008];
const ages = birthYears.map((years) => 2025 - years);
console.log(ages);
// [35, 30, 23, 17]
