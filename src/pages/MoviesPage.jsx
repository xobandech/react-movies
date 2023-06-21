import { useState } from "react";
import MovieCard from "../components/Cards/MovieCard";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const getMoviesByPage = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const apiKey = "1ZTHHEM-879MGTV-HBK76WM-C77A539"; // Replace with your own API key
    const page = e.target[0].value; // Access the value of the input field using the name attribute
    await fetch(`https://api.kinopoisk.dev/v1.3/movie/${page}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.docs);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="w-[1030px] bg-white">
        <h1>Movies</h1>
        <form onSubmit={getMoviesByPage}>
          <input type="text" />
          <button type="submit">Get Movie by ID</button>
        </form>
        {movies.map(({poster, name, year, description}) => {
          const movie = {poster, name, year, description} 
          return <MovieCard movie={movie} />;
        })}
      </div>
    </>
  );
}
