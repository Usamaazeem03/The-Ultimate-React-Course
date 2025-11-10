export default function Item({ item, onDeleteItem, onTogglePacked }) {
  return (
    <li>
         <input
           type="checkbox"
           checked={!!item.packed}
           onChange={(e) => onTogglePacked(item.id, e.target.checked)}
         />
      <span style={!!item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
