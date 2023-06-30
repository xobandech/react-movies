import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/Cards/MovieCard";
import { GENRES } from "../constants/genres.ts";

const apiKey = process.env.REACT_APP_KINOPOISK_API_KEY;

const GenrePage = () => {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [loadedPages, setLoadedPages] = useState([]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      setIsLoading(true);

      try {
        // Check if movies for the current page are already loaded
        if (loadedPages.includes(currentPage)) {
          return;
        }

        const response = await fetch(
          `https://api.kinopoisk.dev/v1.3/movie?page=${currentPage + 1}&limit=36&genres.name=${GENRES[genre]}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "X-API-KEY": apiKey,
            },
          }
        );

        const data = await response.json();
        console.log("fetch");
        setMovies((prevMovies) => {
          const updatedMovies = [...prevMovies];
          updatedMovies[currentPage] = data.docs;
          return updatedMovies;
        });
        console.log(movies);
        setLoadedPages((prevLoadedPages) => [...prevLoadedPages, currentPage]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesByGenre();
  }, [currentPage, genre, loadedPages]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-[1030px] bg-white">
      <h1>Genres</h1>

      <div className="grid gap-5 justify-items-center grid-cols-3 max-md:grid-cols-2 px-10 ">
        {movies[currentPage] &&
          movies[currentPage].map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
      </div>
      <button
        onClick={() => {
          if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
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
  );
};

export default GenrePage;
