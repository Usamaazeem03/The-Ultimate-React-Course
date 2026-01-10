import { useEffect, useState } from "react";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const KEY = "528fe24";

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          // response
          const data = await res.json();

          if (data.Response === "False")
            throw new Error("Movie not found. Please try another search term.");
          // fix duplicate movies error
          const uniqueMovies = data.Search.filter(
            (movie, index, self) =>
              index === self.findIndex((m) => m.imdbID === movie.imdbID)
          );

          setMovies(uniqueMovies);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      // handleCloseMovie();
      fetchMovies();
      return () => controller.abort();
    },

    [query]
  );
  return { movies, isLoading, error };
}
