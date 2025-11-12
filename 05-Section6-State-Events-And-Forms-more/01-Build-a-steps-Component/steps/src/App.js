import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1); //like this  useState(1) use.. call hook
  const [isOpen, setIsOpen] = useState(true);
  // const [text] = useState({ name: "usama" });
  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
    // BAD PRACTICE TO MUTATE STATE DIRECTLY
    // text.name = "Ali";
  }

  return (
    <>
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

          {/* <p className="message">
            <h3>Step {step}</h3>
            {messages[step - 1]}
            
          </p> */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              textColor={"#fff"}
              bgColor={"#7950f2"}
              text={"Previous"}
              onClick={handlePrevious}
            >
              👈 Previous
            </Button>
            <Button
              textColor={"#fff"}
              bgColor={"#7950f2"}
              text={"Next"}
              onClick={handleNext}
            >
              {" "}
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function Button({ textColor, bgColor, children, onClick }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      className="btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
export default App;
