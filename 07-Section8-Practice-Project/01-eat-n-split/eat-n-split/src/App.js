import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [friendFormIsOpen, setFriendFormIsOpen] = useState(false);

  function handleShowAddFriend() {
    setFriendFormIsOpen((show) => !show);
  }

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setFriendFormIsOpen(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {friendFormIsOpen && <FormAddFriend onAddFriends={handleAddFriends} />}
        <Button className="button" onClick={handleShowAddFriend}>
          {friendFormIsOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function Button({ children, onClick, type = "button" }) {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>
          <div>
            {friend.balance < 0 && (
              <p className="red">
                You own {friend.name} {Math.abs(friend.balance)}$
              </p>
            )}
            {friend.balance > 0 && (
              <p className="green">
                {friend.name} owes you {Math.abs(friend.balance)}$
              </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}
          </div>
          <Button className="button">Select</Button>
        </li>
      ))}
    </ul>
  );
}

function FormAddFriend({ onAddFriends }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !img) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${img}?=${id}`,
      balance: 0,
    };
    onAddFriends(newFriend);
    setName("");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼️ Image URL</label>
      <input value={img} type="text" onChange={(e) => setImg(e.target.value)} />
      <Button type="submit" className="button">
        Add
      </Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰Bill value</label>
      <input type="text" />
      <label>🧒Your Expense</label>
      <input type="text" />
      <label>👫X Expense</label>
      <input type="text" />
      <label>💸who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button className="button">Split Bill</Button>
    </form>
  );
}
