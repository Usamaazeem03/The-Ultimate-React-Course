import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import "./index.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        photoName={pizzaData[0].photoName}
        price={pizzaData[0].price}
      />
      <Pizza
        name={pizzaData[1].name}
        ingredients={pizzaData[1].ingredients}
        photoName={pizzaData[1].photoName}
        price={pizzaData[1].price}
      />
      <Pizza
        name={pizzaData[2].name}
        ingredients={pizzaData[2].ingredients}
        photoName={pizzaData[2].photoName}
        price={pizzaData[2].price}
      />
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We'er currently open
    </footer>
  );
}

// componet
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt="Pizza" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}
// React 18V
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
