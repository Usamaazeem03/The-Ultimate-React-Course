// Template Literals (Template Strings)
// Basic Interpolation
let firstName = "Usama";
const age = 22;
let job = "Web Developer";
const info = `Hello, My name is ${firstName}, I'm ${age} years old and I work as a ${job}.`;
console.log(info); // Hello, My name is Usama, I'm 22 years old and I work as a Web Developer.

// Multi-line String
let multiLine = `Hello, My name is ${firstName},
I'm ${age} years old and
I work as a ${job}.`;
console.log(multiLine);
// Hello, My name is Usama,
// I'm 22 years old and
// I work as a Web Developer.

// Expression Inside Template
console.log(`In 5 years, I will be ${age + 5} years old.`); // In 5 years, I will be 27 years old.

//Embed Function Result
function toDay() {
  return `Today is ${new Date().toLocaleDateString()}`;
}
console.log(`Hello, My name is ${firstName}, ${toDay()}`); // Hello, My name is Usama, Today is 6/10/2024

// Object Property Interpolation
const user = {
  id: 1,
  User: "Usama",
};
console.log(`User ${user.User} has id ${user.id}`); // User Usama has id 1

// Loop with Template Literals
const furits = ["Apple", "Banana", "Mango"];
let list = `<ul>`;
for (const fruit of furits) {
  list += `<li>${fruit}</li>`;
}
list += `</ul>`;
console.log(list);
// <ul><li>Apple</li><li>Banana</li><li>Mango</li></ul>

// Nested Template Literals
const firstName1 = "Usama";
const lastName1 = "Khan";
const fullName = `${firstName1} ${lastName1}`;
console.log(`Hello, My name is ${fullName}.`); // Hello, My name is Usama Khan.
