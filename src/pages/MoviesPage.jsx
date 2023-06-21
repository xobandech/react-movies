import { useState } from "react";
import MovieCard from "../components/Cards/MovieCard";



export default function MoviesPage() {

  const [movies, setMovies] = useState([])

  const getMovieById = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const apiKey = "1ZTHHEM-879MGTV-HBK76WM-C77A539"; // Replace with your own API key
    const page = e.target.value; // Access the value of the input field using the name attribute
    await fetch(`https://api.kinopoisk.dev/v1/movie?page=${page}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data)
        console.log(movies);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
    <>
      <div className="w-[1030px] bg-white">
        <h1>Movies</h1>
        <form onSubmit={getMovieById}>
          <input type="text" name="movieId" />
          <button type="submit">Get Movie by ID</button>
        </form>
        {movies.length > 0
          ? movies.map((movie) => {
            console.log('ads');
              return <MovieCard movie={movie} />;
            })
          : null}
      </div>
    </>
  );
}
