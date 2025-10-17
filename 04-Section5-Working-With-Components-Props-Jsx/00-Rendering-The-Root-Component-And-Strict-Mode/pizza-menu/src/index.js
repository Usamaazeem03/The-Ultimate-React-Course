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
  const pizzas = pizzaData;
  // const pizzas =[]
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              photoName={pizza.photoName}
              price={pizza.price}
              soldOut={pizza.soldOut}
              key={pizza.name}
            />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later:)</p>
      )}

      {/* <Pizza
        name={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        photoName={pizzaData[0].photoName}
        price={pizzaData[0].price}
      /> */}
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
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

// componet
function Pizza(props) {
  if (props.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.photoName} alt="Pizza" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </li>
  );
}
// React 18V
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
