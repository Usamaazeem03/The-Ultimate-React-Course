import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  //you also use this deveing state for the stats component but its not look good

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleTogglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
      />
      <Stats items={items} />
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
function PackingList({ items, onDeleteItem, onTogglePacked }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">📝 Sort by Input Order</option>
          <option value="description">🔤 Sort by Description</option>
          <option value="packed">🎒 Sort by Packed Status</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onTogglePacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onTogglePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.unit} — {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em
          style={{
            display: "flex",
            padding: "0rem 1rem",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          🧺 Your list is empty. Start adding some items!
        </em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentPacked =
    numItems === 0 ? 0 : Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100 ? (
          <span
            style={{
              display: "flex",
              padding: "0rem 3.5rem",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            🎉 List complete! You’re good to go! 🚀
          </span>
        ) : (
          <span
            style={{
              display: "flex",
              padding: "0rem",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            🧺 You’ve added {numItems} things to your list, and packed{" "}
            {numPackedItems} of them ({percentPacked}%)
          </span>
        )}
      </em>
    </footer>
  );
}

export default App;
