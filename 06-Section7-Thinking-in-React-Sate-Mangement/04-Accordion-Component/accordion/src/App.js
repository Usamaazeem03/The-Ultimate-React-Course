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
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div>
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          // text={el.text}
          num={i + 1}
          key={el.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, children, curOpen, onOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === curOpen;
  function handleOpen() {
    // setIsOpen((isOpen) => !isOpen);
    onOpen(isOpen ? null : num);
  }
  return (
    <div className="accordion-item" onClick={handleOpen}>
      <p className="number">{num <= 9 ? `0${num}` : num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
export default App;
