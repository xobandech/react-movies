import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/Cards/MovieCard";
import { GENRES } from "../constants/genres.ts";
const GenrePage = () => {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);
  const apiKey = process.env.REACT_APP_KINOPOISK_API_KEY;
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      setIsLoading(true);   
      try {
        const response = await fetch(
          `https://api.kinopoisk.dev/v1.3/movie?page=${currentPage}&limit=12&genres.name=${GENRES[genre]}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "X-API-KEY": apiKey,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setMovies([...data.docs, ...movies]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesByGenre();
  }, [currentPage]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};

export default GenrePage;
