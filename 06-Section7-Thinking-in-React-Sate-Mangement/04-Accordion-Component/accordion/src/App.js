import { useState } from "react";
import "./App.css";

export const faqs = [
  {
    title: "What is React and why is it used?",
    text: "React is a JavaScript library used to build fast and interactive user interfaces. It helps create reusable UI components and efficiently updates the DOM when data changes.",
  },
  {
    title: "What are components in React?",
    text: "Components are reusable and independent pieces of a React application. They help break the UI into smaller parts that are easier to manage and maintain.",
  },
  {
    title: "What is the difference between state and props?",
    text: "Props are used to pass data from parent to child components, while state is used to manage data within a component. Props are read-only, but state can change dynamically.",
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div>
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          num={i + 1}
          key={el.title}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="accordion-item" onClick={handleOpen}>
      <p className="number">{num <= 9 ? `0${num}` : num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
export default App;
