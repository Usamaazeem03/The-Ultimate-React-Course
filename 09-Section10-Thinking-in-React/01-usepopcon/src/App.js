import { useEffect, useState, useRef } from "react";
import StarRating from "./StarRating.js";
import { useMovies } from "./useMovies.js";
import { useLocalStorage } from "./useLocalStorage.js";
import { useKey } from "./useKey.js";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "528fe24";
export default function App() {
  const [query, setQuery] = useState("");
  // custem hook for local storage
  const { value: watched, setValue: setWatched } = useLocalStorage(
    [],
    "watched"
  );

  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((m) => m.imdbID !== id));
  }

  //

  // custem hook
  const { movies, isLoading, error } = useMovies(query);

  return (
    // Passing Elements as Props
    // <Box element={<MovieList movies={movies} />}/>
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedMoviesSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function Loading() {
  return (
    <div className="loading">
      <div className="loading-spinner"></div>
      <p>Loading movies...</p>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <div className="error">
      <p>
        <span>🛑</span>
        {message}
      </p>
    </div>
  );
}

function NavBar({ children }) {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        {children}
      </nav>
    </>
  );

  function Logo() {
    return (
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
    );
  }
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Search({ query, setQuery }) {
  const inputEl = useRef(null);
  // custom hook for key press
  useKey("enter", function () {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery("");
  });

  // useEffect(
  //   function () {
  //     function callBack(e) {
  //       if (document.activeElement === inputEl.current) return;

  //       if (e.key === "Enter") {
  //         inputEl.current.focus();
  //         setQuery("");
  //       }
  //     }
  //     document.addEventListener("keydown", callBack);

  //     return function () {
  //       document.removeEventListener("keydown", callBack);
  //     };
  //   },
  //   [setQuery]
  // );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

function Main({ children }) {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
// function ListBox({ children }) {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="box">
//       <button
//         className="btn-toggle"
//         onClick={() => setIsOpen((open) => !open)}
//       >
//         {isOpen ? "–" : "+"}
//       </button>
//       {isOpen && children}
//     </div>
//   );
// }

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movieData, setMovieData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );
  const watchedUserRating = watched.find(
    (m) => m.imdbID === selectedId
  )?.userRating;
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movieData;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      runtime: Number(runtime.split(" ")[0]),
      imdbRating: Number(imdbRating),
      userRating,
      countRatingDecisions: countRef.current,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  useEffect(
    function () {
      async function fetchMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );

        const data = await res.json();
        setMovieData(data);
        setIsLoading(false);
      }
      fetchMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;
      // cleanup function
      return function cleanup() {
        document.title = "usePopcorn";
      };
    },

    [title]
  );
  // custom hook key press
  useKey("Escape", onCloseMovie);

  return (
    <div className="details">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movieData} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          {/* {avgRating} */}

          <section>
            <div className="rating">
              {isWatched ? (
                <p>
                  You rated this movie {watchedUserRating}
                  <span>⭐</span>
                </p>
              ) : (
                <StarRating
                  maxRating={10}
                  size={24}
                  onSetRating={setUserRating}
                />
              )}
              {userRating > 0 && (
                <button className="btn-add" onClick={() => handleAdd()}>
                  + Add to list
                </button>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

function WatchedMoviesSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
