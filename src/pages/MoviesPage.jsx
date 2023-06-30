import { useState, useEffect, useContext } from "react";
import MovieCard from "../components/Cards/MovieCard";
import { MoviesContext } from "../contexts/MoviesContext.tsx";

const apiKey = process.env.REACT_APP_KINOPOISK_API_KEY;

export default function MoviesPage() {
  const { movies, setMovies } = useContext(MoviesContext);
  const { loadedPages, setLoadedPages } = useContext(MoviesContext);
  const { currentPage, setCurrentPage } = useContext(MoviesContext);

  const loadMoviesOnScroll = async () => {
    setIsLoading(true);

    try {
      if (loadedPages.includes(currentPage)) {
        return;
      }

      const response = await fetch(
        `https://api.kinopoisk.dev/v1.3/movie?page=${currentPage}&limit=36`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-API-KEY": apiKey,
          },
        }
      );
      const data = await response.json();

      const filteredMovies = data.docs.filter(
        (movie) => movie.name !== "" && movie.poster
      );

      setMovies((prevMovies) => {
        const updatedMovies = [...prevMovies];
        updatedMovies[currentPage] = filteredMovies;
        return updatedMovies;
      });

      setLoadedPages((prevLoadedPages) => [...prevLoadedPages, currentPage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMoviesOnScroll();
  }, [currentPage, loadedPages]);

  return (
    <>
      <div className="w-[1030px] bg-white">
        <h1>Movies</h1>
        <div className="grid gap-5 justify-items-center grid-cols-3 max-md:grid-cols-2 px-10 ">
          {movies && movies[currentPage] &&
            movies[currentPage].map(({ poster, name, year, description, id }) => {
              const movie = { poster, name, year, description, id };
              return <MovieCard key={id} movie={movie} />;
            })}
        </div>
        <button
          onClick={() => {
            if (currentPage > 0) {
              setCurrentPage(currentPage - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          disabled={currentPage < 1}
        >
          Previous Page
        </button>

        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Next Page
        </button>
      </div>
    </>
  );
}
