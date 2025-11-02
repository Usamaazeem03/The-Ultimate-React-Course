import { useState } from "react";

export default function Form({ onAddItem }) {
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
