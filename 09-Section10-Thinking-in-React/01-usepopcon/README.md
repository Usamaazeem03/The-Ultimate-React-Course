# usePopcorn App 🍿

**A React-based Movie Tracker App with Ratings and Watchlist Management**

![usePopcorn](https://user-images.githubusercontent.com/placeholder/usepopcorn.png)
_Track your favorite movies, rate them, and maintain your watched list._

---

## Project Overview

usePopcorn is a web app built with **React** that allows users to:

- Search movies from the **OMDb API**.
- View detailed movie information.
- Rate movies using a **custom star rating component**.
- Add rated movies to a **personal watched list** stored in **local storage**.
- Track average ratings, runtime, and total movies watched.

This project was a complete hands-on exercise in building a **modern React application**, including **custom hooks**, **state management**, **side effects**, and **component composition**.

---

## Features

- **Search Movies:** Type at least 3 characters to search for movies.
- **Movie Details:** View detailed information including poster, plot, runtime, IMDb rating, actors, director, genre, and release date.
- **Custom Star Rating:** Rate movies with an interactive star rating component.
- **Watched List:** Add and remove movies from your watched list.
- **Local Storage Persistence:** Watched movies and ratings are saved even after browser reloads.
- **Keyboard Shortcuts:**

  - Press `Enter` to focus on the search input.
  - Press `Escape` to close movie details modal.

- **Responsive UI:** Designed with reusable **Box** components for collapsible sections.

---

## Technologies Used

- **React (useState, useEffect, useRef)**
- **Custom Hooks** (`useMovies`, `useLocalStorage`, `useKey`)
- **JavaScript ES6+**
- **OMDb API** for movie data
- **CSS / Flexbox** for layout and styling
- **PropTypes** for component prop validation

---

## Concepts Learned

This project was a **deep dive into modern React development**, and I learned:

1. **Component Composition** – Breaking the app into reusable, modular components like `NavBar`, `Box`, `MovieList`, and `WatchedMoviesSummary`.
2. **Custom Hooks** – Building `useMovies` for fetching data, `useLocalStorage` for state persistence, and `useKey` for keyboard interactions.
3. **State Management** – Using `useState` for local state and handling updates based on user actions.
4. **Side Effects with useEffect** – Fetching data from APIs, updating the document title, and cleaning up effects.
5. **Refs and DOM Manipulation** – Using `useRef` to focus on input elements programmatically.
6. **Conditional Rendering** – Displaying loading spinners, errors, and dynamic components based on state.
7. **Array and Object Manipulation** – Filtering duplicates, calculating averages, and managing arrays of movies.
8. **Keyboard Interactions** – Implementing key listeners with reusable hooks.
9. **Persistent State** – Using `localStorage` to save watched movies across sessions.
10. **Component Communication** – Passing props, handling callbacks, and lifting state up.
11. **Clean Code Practices** – Meaningful naming, separating concerns, and reusable functions.

This project reinforced the **importance of structured, modular React code** and handling asynchronous data flows correctly.

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/Usamaazeem03/The-Ultimate-React-Course
cd The-Ultimate-React-Course\09-Section10-Thinking-in-React\01-usepopcon
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

> Make sure to replace the API key in `useMovies.js` and `App.js` with your own OMDb API key if needed.

---

## Usage

- Type a movie name in the search bar (minimum 3 characters).
- Click on a movie to view details.
- Rate the movie using the star rating component.
- Click **Add to List** to save it to your watched movies.
- Review your watched movies summary with average ratings and runtime.
- Delete movies from your watched list using the **X** button.

---

## Acknowledgements

- OMDb API for movie data
- React documentation and tutorials for hooks and component patterns

---
