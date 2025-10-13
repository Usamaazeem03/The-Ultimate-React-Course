// Asynchronous javaScript Promises
// not good code
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("Usama");

// Async/Await
// good code
async function getTodos(){
  const res =await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json();
  console.log(data)
  return data;
}
const todos = getTodos()
console.log(todos)