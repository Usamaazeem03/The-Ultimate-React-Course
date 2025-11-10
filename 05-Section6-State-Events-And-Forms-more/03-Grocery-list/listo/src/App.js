import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Auth from "./components/Auth";
import { onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "./config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);

  async function handleAddItem(item) {
    try {
      await addDoc(collection(db, "items"), {
        ...item,
        userId: user.uid,
        packed: false,
      });
    } catch (err) {
      console.error("Error adding item: ", err);
    }

    // setItems((items) => [...items, item]);
  }

  async function handleDeleteItem(id) {
    try {
      await deleteDoc(doc(db, "items", id));
    } catch (err) {
      console.error("Error deleting item: ", err);
    }
    // setItems((items) => items.filter((item) => item.id !== id));
  }

  async function handleTogglePacked(id, newValue) {
    try {
      if (!id || typeof id !== "string") {
        console.error("Invalid document id when toggling packed:", id);
        return;
      }
      if (!db) {
        console.error("Firestore not initialized (db is null)");
        return;
      }
      const itemRef = doc(db, "items", id);
      await updateDoc(itemRef, { packed: !!newValue });
    } catch (err) {
      console.error("Error updating item: ", err);
    }
    // setItems((items) =>
    //   items.map((item) =>
    //     item.id === id ? { ...item, packed: !item.packed } : item
    //   )
    // );
  }

  async function handleClearList() {
    const confirm = window.confirm(
      "⚠️ Are you sure you want to clear the list?"
    );
    if (!confirm) return;

    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach(async (docSnap) => {
      await deleteDoc(doc(db, "items", docSnap.id));
    });

    // if (confirm) setItems([]);
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
  // data fetching from firestore
  useEffect(() => {
    if (!user) return;
    const itemsRef = collection(db, "items");

    // see own items only
    const q = query(itemsRef, where("userId", "==", user?.uid));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const itemList = snapshot.docs.map((docSnap) => ({
        // spread data first, then set id to ensure the generated doc id wins
        ...docSnap.data(),
        id: docSnap.id,
      }));
      setItems(itemList);
    });
    return () => unsubscribe();
  }, [user]);

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
