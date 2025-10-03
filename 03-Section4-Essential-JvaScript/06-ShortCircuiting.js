// Short Circuiting and Logical Operators

// Logical Operators: OR (||) and AND (&&)
console.log("--- OR Operator (||) ---");
console.log(true || false); // true
console.log(false || false); // false
console.log("Hello" || 0); // 'Hello'
console.log("" || "World"); // 'World'
console.log(null || undefined || "Fallback"); // 'Fallback'
console.log("First Truthy" || "Second Truthy"); // 'First Truthy'

console.log("--- AND Operator (&&) ---");
console.log(true && false); // false
console.log(true && true); // true
console.log("Hello" && 42); // 42
console.log("" && "World"); // ''
console.log(null && "Fallback"); // null
console.log("First Truthy" && "Second Truthy"); // 'Second Truthy'
console.log("First Truthy" && 0 && "Third Truthy"); // 0

// Practical Examples
const user = {
  name: "Alice",
  age: 25,
  isAdmin: false,
};
const defaultUser = {
  name: "Guest",
  age: 0,
  isAdmin: false,
};
// Using OR to provide default values
const currentUser = user || defaultUser;
console.log(currentUser); // { name: 'Alice', age: 25, isAdmin: false }

const anotherUser = null;
const fallbackUser = anotherUser || defaultUser;
console.log(fallbackUser); // { name: 'Guest', age: 0, isAdmin: false }

// Using AND to check multiple conditions
if (user && user.isAdmin) {
  console.log("User is an admin");
} else {
  console.log("User is not an admin");
} // User is not an admin

const adminUser = { name: "Bob", age: 30, isAdmin: true };
if (adminUser && adminUser.isAdmin) {
  console.log("User is an admin");
} else {
  console.log("User is not an admin");
} // User is an admin

// Combining OR and AND
const complexCondition =
  (user && user.isAdmin) || (anotherUser && anotherUser.isAdmin);
console.log(complexCondition); // false
const complexCondition2 =
  (adminUser && adminUser.isAdmin) || (anotherUser && anotherUser.isAdmin);
console.log(complexCondition2); // true
// Summary
// - The OR operator (||) returns the first truthy value or the last value if all are falsy.
// - The AND operator (&&) returns the first falsy value or the last value if all are truthy.
// - These operators can be used for default values and conditional checks in practical scenarios.
