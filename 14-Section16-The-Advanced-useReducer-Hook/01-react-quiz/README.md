# 🧠 React Quiz Application

A learning-focused React project built to **properly understand and practice the `useReducer` hook** by building a real, multi-state application instead of a small demo.

This project helped me move from “I know what useReducer is” to **“I know when and why to use it.”**

---

## 🚀 What is this project?

This is a **Quiz Application** built with React that includes:

* Loading state
* Ready state
* Active quiz state
* Finish screen
* Progress bar
* Answer selection
* Result flow

The app uses **`useReducer`** to manage all application state in a **predictable and scalable way**.

I also used **json-server** as a fake API to simulate real-world data fetching.

---

## 🛠️ Getting Started

### Prerequisites

* Node.js installed on your machine

### Installation

```bash
npm install
```

### Start the App

```bash
npm start
```

Runs the app in development mode:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📦 Fake API (json-server)

This project uses **json-server** to serve quiz questions.

Start the server like this:

```bash
npm run server
```

Make sure it runs before starting the React app.

---

## 📜 Available Scripts

| Command          | Description                     |
| ---------------- | ------------------------------- |
| `npm start`      | Run the app in development mode |
| `npm run server` | Start the fake API server       |
| `npm run build`  | Build the app for production    |

---

## 🧩 What I Learned

This project helped me understand:

* When and **why to use `useReducer` instead of `useState`**
* How to design **state as a state machine** (loading → ready → active → finished)
* How to **centralize complex state logic**
* How to **dispatch actions instead of mutating state**
* How real apps structure state, not just small demos

Most importantly:

> `useReducer` is not about complexity.
> It’s about **control, structure, and predictability**.

---

## 🧱 Technologies Used

* React
* JavaScript (ES6+)
* CSS
* json-server (fake API)

---

## 🎯 Why I Built This

To stop avoiding `useReducer` and **start thinking in actions, transitions, and controlled state flows** — like real applications do.