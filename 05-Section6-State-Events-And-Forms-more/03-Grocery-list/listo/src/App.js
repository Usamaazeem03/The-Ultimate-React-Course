import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>✏️ Listo 🛒</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("kg");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      unit,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
    setUnit("kg");
    console.log(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Never forget an item again 🛍️</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        {[
          "kg", // kilograms
          "g", // grams
          "mg", // milligrams
          "liter", // liters
          "ml", // milliliters
          "pcs", // pieces
          "pack", // pack or package
          "dozen", // 12 items
          "box", // box
          "bottle", // bottle
          "jar", // jar
          "bag", // bag
          "can", // can
          "packet", // packet
          "tray", // tray
          "cup", // cup
          "tbsp", // tablespoon
          "tsp", // teaspoon
        ].map((unit) => (
          <option value={unit} key={unit}>
            {unit}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} id={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.unit} — {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>🧺 You’ve added X things to your list, and packed X of them (X%)</em>
    </footer>
  );
}

export default App;
