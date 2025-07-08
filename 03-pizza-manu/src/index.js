import React from "react";
import ReactDom from "react-dom/client"; // Correct import for React 18+
//pizza data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
///////////////////////////////////////////////
// rendering the root component and strict mode
function App() {
  return (
    <div>
      <Header />
      <Menu />
    </div>
  );
}

// creaate ui
function Header() {
  return (
    <header>
      <h1>hola</h1>
    </header>
  );
}

function Menu() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Footer />
    </div>
  );
}
function Footer() {
  // logic to check if the restaurant is open or closed
  const hour = new Date().getHours();
  const openingHour = 12;
  const closingHour = 22;
  if (hour >= openingHour && hour <= closingHour) alert("We're open!");
  else alert("We're closed!");

  return (
    <footer>{new Date().toLocaleTimeString()}.We're currently open</footer>
  );
  // return React.createElement(
  //   "footer",
  //   null,
  //   "we're currently closed, please come back later!"
  // );
}
// new components are created using function
function Pizza() {
  return (
    <div>
      <img src={pizzaData[2].photoName} alt={pizzaData[2].name} />
      <h2>{pizzaData[2].name}</h2>
      <p>{pizzaData[2].ingredients}</p>
    </div>
  );
}
// v18+ uses createRoot for rendering
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Debugging tip:
// If you want to debug, you can add a console log
console.log("React app is running!");
// Make sure you app is running(if running but not updating),
// then stop the server and run it again (ctrl + c to stop and npm start to run again)
// open the browser console tab or code editor terminal anytime to see the logs
// if see any error and you are sure you nover fix own the copy error or serch cheat gpt/Google the very youge community is there to help you
// used eslint to check the code for errors
//
