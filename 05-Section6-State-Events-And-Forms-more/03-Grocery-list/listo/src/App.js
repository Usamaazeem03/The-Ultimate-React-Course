import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Auth from "./components/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";

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
  function handleClearList() {
    const confirm = window.confirm(
      "⚠️ Are you sure you want to clear the list?"
    );
    if (confirm) setItems([]);
  }
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      // optionally, update state or redirect
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className="app">
      {!user ? (
        /* Show login/signup form */
        <Auth />
      ) : (
        <>
          <Logo onLogout={handleLogout} />
          <Form onAddItem={handleAddItem} />
          <PackingList
            items={items}
            onDeleteItem={handleDeleteItem}
            onTogglePacked={handleTogglePacked}
            onClearList={handleClearList}
          />
          <Stats items={items} />
        </>
      )}
    </div>
  );
}
export default App;
