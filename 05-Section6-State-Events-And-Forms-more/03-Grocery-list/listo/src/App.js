import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Auth from "./components/Auth";
import { onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./config/firebase";

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const signedInUser = result.user;
      setUser(signedInUser);
    } catch (error) {
      console.error("Error during Google login:", error.code, error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="app">
      {!user ? (
        /* Show login/signup form */
        <Auth onGoogleLogin={handleGoogleLogin} />
      ) : (
        <>
          <Logo onLogout={handleLogout} user={user} />
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
