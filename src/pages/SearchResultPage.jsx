import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/Cards/MovieCard";

export default function SearchResultsPage() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search");
  const [movies, setMovies] = useState([]);
  const [searchPage, setSearchPage] = useState(1);
  const apiKey = process.env.REACT_APP_KINOPOISK_API_KEY;
  console.log(movies);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.kinopoisk.dev/v1.2/movie/search?page=${searchPage}&limit=100&query=${search}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "X-API-KEY": apiKey,
            },
          }
        );
        const data = await response.json();
        const newMovies = data.docs;
        const filteredMovies = newMovies.filter(
          (movie) => movie.name !== "" && movie.poster
        );
        setMovies(filteredMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [search, searchPage]);
  return (
    <div className="w-[1030px] bg-white">
      <h1>Search Results</h1>
      <div className="grid gap-5 justify-items-center grid-cols-3 max-md:grid-cols-2 px-10 ">

        {movies && movies.length > 0 ? (
          <>
            {movies.map(({ poster, name, year, description, id }) => {
              const movie = { poster, name, year, description, id };
              return <MovieCard key={id} movie={movie} />;
            })}
          </>
        ) : (
          <p>No movies found.</p>
        )}
      </div>
      <button
        onClick={() => {
          if (searchPage > 1) setSearchPage(searchPage - 1);
        }}
      >
        Prev Page
      </button>
      <button onClick={() => setSearchPage(searchPage + 1)}>Next Page</button>
    </div>
  );
}
