import React, { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Staps />
      <Staps />
    </div>
  );
}
function Staps() {
  const [step, setStap] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // EventHandlers function
  function handlePrevious() {
    // update state based on the current step {used call back function}
    if (step > 1) setStap((s) => s - 1);
  }
  function handleNext() {
    // update state based on the current step {used call back function}
    if (step < messages.length) {
      setStap((s) => s + 1);
      // setStap((s) => s + 1);// not update state based on current stete,
    }
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
