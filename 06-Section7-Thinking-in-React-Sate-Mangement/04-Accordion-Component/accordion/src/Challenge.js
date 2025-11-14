import { useState } from "react";
const options = [
  { label: "Dissatisfied (0%)", value: 0 },
  { label: "It was okay (5%)", value: 5 },
  { label: "It was good (10%)", value: 10 },
  { label: "Absolutely amazing (20%)", value: 20 },
];
export default function App() {
  const [bill, setBill] = useState("");
  const [friendOpt, setFriendOpt] = useState("");
  const [yourOpt, setYourOpt] = useState("");
  console.log(bill);
  console.log(yourOpt);
  console.log(friendOpt);

  function handleReset() {
    setBill("");
    setYourOpt("");
    setFriendOpt("");
  }
  return (
    <div>
      <Bill setBill={setBill} bill={bill} />
      <YourTip setYourOpt={setYourOpt} yourOpt={yourOpt} />
      <YourFriendTip setFriendOpt={setFriendOpt} friendOpt={friendOpt} />
      <Status
        bill={bill}
        yourOpt={yourOpt}
        friendOpt={friendOpt}
        onHandleReset={handleReset}
      />
    </div>
  );
}

function Bill({ setBill, bill }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="number"
        placeholder="enter your bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
function TipOption({ label, value }) {
  return (
    <option key={value} value={value}>
      {label}
    </option>
  );
}

function YourTip({ setYourOpt, yourOpt }) {
  return (
    <div>
      <p>How did you like the service?</p>
      <select
        value={yourOpt}
        onChange={(e) => setYourOpt(Number(e.target.value))}
      >
        {options.map((opt) => (
          <TipOption label={opt.label} value={opt.value} key={opt.value} />
        ))}
      </select>
    </div>
  );
}
function YourFriendTip({ setFriendOpt, friendOpt }) {
  if (!setFriendOpt) return null;
  return (
    <div>
      <p>How did your friend like the service?</p>
      <select
        value={friendOpt}
        onChange={(e) => setFriendOpt(Number(e.target.value))}
      >
        {options.map((opt) => (
          <TipOption label={opt.label} value={opt.value} key={opt.value} />
        ))}
      </select>
    </div>
  );
}

function Status({ bill, yourOpt, friendOpt, onHandleReset }) {
  // if (bill === "" || yourOpt === "" || friendOpt === "") return null;

  const yourTip = (bill * yourOpt) / 100;
  const friendTip = (bill * friendOpt) / 100;
  const totalTip = yourTip + friendTip;
  const tipAvg = (yourTip + friendTip) / 2;
  const total = bill + totalTip;

  return (
    <div>
      <h1>
        Your pay ${Math.round(total)}(${Math.round(bill)} + $
        {Math.round(tipAvg)})
      </h1>
      <button onClick={onHandleReset}>Reset</button>
    </div>
  );
}
