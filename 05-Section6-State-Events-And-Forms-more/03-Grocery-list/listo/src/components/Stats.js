export default function Stats({ items }) {
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
  // coerce packed to boolean (handles undefined/null from Firestore)
  const numPackedItems = items.filter((item) => !!item.packed).length;
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
