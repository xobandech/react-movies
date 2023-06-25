import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/Cards/MovieCard";

export default function SearchResultsPage() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search");
  const [movies, setMovies] = useState([]);
  const apiKey = process.env.REACT_APP_KINOPOISK_API_KEY;  
  console.log(movies);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=12&query=${search}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "X-API-KEY": apiKey,
            },
          } 
        );
        const data = await response.json();
        setMovies(data.docs);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [search]);
  return (
    <div className="w-[1030px] bg-white">
      <h1>Search Results</h1>
      {movies && movies.length > 0 ? (
        <>
          {movies.map(({ poster, name, year, description, id }) => {
            
            const movie = { poster, name, year, description, id };
            return <MovieCard key={id} movie={movie} />
          })}
        </>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}
