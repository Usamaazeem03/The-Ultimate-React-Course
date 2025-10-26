# React Steps App 🚀

This is a simple **React learning project** that demonstrates how to use **React state (`useState`)**, conditional rendering, and event handling to create a small multi-step UI component.

---

## 📘 Project Overview

This project displays a **three-step process** that guides users through simple messages like:

1. Learn React ⚛️
2. Apply for jobs 💼
3. Invest your new income 🤑

Users can:

- Move **back and forth** between steps using “Previous” and “Next” buttons.
- **Open or close** the steps component with a toggle button.

It’s a beginner-friendly project to understand how React hooks and dynamic UI updates work.

---

## 🧠 What I Learned

Through this project, I learned:

- How to use the **`useState` hook** in React.
- How to **conditionally render** components using JSX.
- How to **dynamically update UI** based on state.
- How to **prevent direct state mutation** (using setter functions instead).

---

## ⚙️ Features

- ✅ Simple and clean UI
- 🔁 Step-by-step navigation
- 🎛️ Toggle visibility
- 💡 React Hooks practice (`useState`)

---

## 🧩 Code Highlights

```jsx
const [step, setStep] = useState(1);
const [isOpen, setIsOpen] = useState(true);

function handleNext() {
  if (step < 3) setStep((s) => s + 1);
}

function handlePrevious() {
  if (step > 1) setStep((s) => s - 1);
}
```

The above code handles navigation and state management without mutating state directly.

---

## 🪄 How to Run This Project

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-steps-app.git
   ```

2. Navigate to the folder:

   ```bash
   cd steps
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 🧑‍💻 Tech Stack

- **React** (Functional Components + Hooks)
- **JavaScript (ES6+)**
- **CSS** for basic styling

---

## 🎯 Purpose

This project is part of my React learning journey — helping me understand how to manage UI states, build reusable components, and follow best practices in React development.
