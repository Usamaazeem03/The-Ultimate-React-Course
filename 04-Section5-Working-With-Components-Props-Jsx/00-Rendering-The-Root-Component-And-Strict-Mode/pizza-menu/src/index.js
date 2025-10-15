import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}
function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer>{new Date().toLocaleTimeString()}.We'er currently open</footer>
  );
}

// componet
function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" />
      <h2>{pizzaData[0].name}</h2>
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
