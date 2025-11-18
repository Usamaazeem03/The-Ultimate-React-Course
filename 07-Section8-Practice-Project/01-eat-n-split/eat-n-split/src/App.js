import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=123",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=123",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://api.dicebear.com/7.x/micah/svg?seed=123",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [friendFormIsOpen, setFriendFormIsOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setFriendFormIsOpen((show) => !show);
  }

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setFriendFormIsOpen(false);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend(friend);
    setFriendFormIsOpen(false);
    // setSelectedFriend((cur) => (cur.id === friend?.id ? null : friend));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {friendFormIsOpen && <FormAddFriend onAddFriends={handleAddFriends} />}
        <Button className="button" onClick={handleShowAddFriend}>
          {friendFormIsOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
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

function FriendList({ friends, onSelectFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => {
        const isSelected = selectedFriend?.id === friend.id;
        return (
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
            <Button className="button" onClick={() => onSelectFriend(friend)}>
              {isSelected ? "Close" : "Select"}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

function FormAddFriend({ onAddFriends }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://api.dicebear.com/7.x/bottts/svg");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !img) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${img}?seed=${id}`,
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
        onChange={(e) => setName(Number(e.target.value))}
      />
      <label>🖼️ Image URL</label>
      <input
        value={img}
        type="text"
        onChange={(e) => setImg(Number(e.target.value))}
      />
      <Button type="submit" className="button">
        Add
      </Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [yourExp, setYourExp] = useState("");
  const paidByFriend = bill ? bill - yourExp : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧒Your Expense</label>
      <input
        type="text"
        value={yourExp}
        onChange={(e) =>
          setYourExp(
            Number(e.target.value) > bill ? yourExp : Number(e.target.value)
          )
        }
      />
      <label>👫{selectedFriend.name} Expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>💸who is paying the bill</label>

      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(Number(e.target.value))}
      >
        <option value="user">{whoIsPaying}</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button className="button">Split Bill</Button>
    </form>
  );
}
