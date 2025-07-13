import React from "react";
import ReactDom from "react-dom/client"; // Correct import for React 18+
import "./index.css"; // External style sheet

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
    <div className="container header">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// creaate ui
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name={pizzaData[2].name}
        ingredients={pizzaData[2].ingredients}
        price={pizzaData[2].price}
        photoName={pizzaData[2].photoName}
      />
      <Pizza
        name={pizzaData[1].name}
        ingredients={pizzaData[1].ingredients}
        price={pizzaData[1].price}
        photoName={pizzaData[1].photoName}
      />
      <Pizza
        name={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        price={pizzaData[0].price}
        photoName={pizzaData[0].photoName}
      />
    </main>
  );
}

// new components are created using function
function Pizza(props) {
  console.log(props);
  // props
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  // logic to check if the restaurant is open or closed
  const hour = new Date().getHours();
  const openingHour = 12;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;
  console.log(isOpen);
  // if (hour >= openingHour && hour <= closingHour) alert("We're open!");
  // else alert("We're closed!");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We're currently open
    </footer>
  );
  // return React.createElement(
  //   "footer",
  //   null,
  //   "we're currently closed, please come back later!"
  // );
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
