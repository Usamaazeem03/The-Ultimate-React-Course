const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Socks", quantity: 1, packed: true },
  { id: 4, description: "Socks", quantity: 11, packed: true },
];
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>✏️ Listo 🛒</h1>;
}
function Form() {
  return (
    <form className="add-form">
      <h3>Never forget an item again 🛍️</h3>
      <select>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <select>
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
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
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
        {item.description} {item.quantity}
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
