// Destructuring Object And Arrays
// Arrays Destructuring
// Destructure the first three numbers from [10, 20, 30, 40, 50].
const num = [10, 20, 30, 40, 50];
const [a, b, c] = num;
console.log(a, b, c); // 10 20 30
// Skip the second element and take the first and third from [1, 2, 3, 4].
const num1 = [1, 2, 3, 4];
const [, secound, third, ,] = num1;
console.log(secound, third); // 2 3
// Use rest (...) to collect remaining elements after the first two.
const num2 = [100, 200, 300, 400, 500];
const [first, sec, ...rest] = num2;
console.log(first, sec); // 100 200
console.log(rest); // [ 300, 400, 500 ]
// Swap the values of two variables a and b using destructuring.
let [x, y] = [10, 20];
[x, y] = [y, x];
console.log(x, y); // 20 10
// From a nested array [1, [2, 3], 4], extract 2 into a variable
const nested = [1, [2, 3], 4];
const num3 = nested[1][0];
console.log(num3); //2

// Object Destructuring
// From { id:1, name:"Ali", age:20 }, destructure name and age.
const person = { id: 1, name: "Ali", age: 20 };
const { name, age } = person;
console.log(name, age); // Ali 20
// Rename properties: destructure name as userName.
const { name: userName } = person;
console.log(userName); // Ali
// Use rest (...) to get all properties except id.
const { id, ...restInfo } = person;
console.log(id); // 1
console.log(restInfo); // { name: 'Ali', age: 20 }
// From a nested object Destructure username.
const user = {
  profile: { username: "Sara", email: "sara@mail.com" },
  role: "admin",
};

const name1 = user.profile.username;
console.log(name1); // Sara
// From {x: 5, y: {z: 10}}, destructure z.
const obj = { x: 5, y: { z: 10 } };
const objZ = obj.y.z;
console.log(objZ); // 10

// Mixed (Array + Object) Destructuring
// From an array of objects [ {id:1, name:"Ali"}, {id:2, name:"Sara"} ], destructure the name of the second user.
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
];
const secondUserName = users[1].name;
console.log(secondUserName); // Sara
// Destructure the first skill from
const userProfile = { name: "Usman", skills: ["JS", "React", "Node"] };
const firstSkill = userProfile.skills[0];
// Combine array + object destructuring: extract username and the first skill from
const user01 = { profile: { username: "Ayesha" }, skills: ["HTML", "CSS"] };
const username = user01.profile.username;
const firstSkill1 = user01.skills[0];
console.log(username, firstSkill1); // Ayesha HTML
// Destructure values from function return:
function getUser() {
  return { id: 1, name: "Ahmed" };
}
const { id: userId, name: userName1 } = getUser();
console.log(userId, userName1); // 1 Ahmed
