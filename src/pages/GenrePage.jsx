import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/Cards/MovieCard";
import { GENRES } from "../constants/genres.ts";
const apiKey = process.env.REACT_APP_KINOPOISK_API_KEY;

const GenrePage = () => {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedPages, setLoadedPages] = useState([]);

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
        console.log("fetch");
        
        if (!loadedPages.includes(currentPage)) {
          const filteredMovies = data.docs.filter(
            (movie) => movie.name !== "" && movie.poster
          );
          setMovies((prevMovies) => [...prevMovies, ...filteredMovies]);
        }
        setLoadedPages((prevLoadedPages) => [...prevLoadedPages, currentPage]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesByGenre();
  }, [currentPage, genre, loadedPages]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const isScrolledToEnd = scrollTop + clientHeight >= scrollHeight - 5;
      if (isScrolledToEnd && !isLoading) {
        setCurrentPage((prevPage) => prevPage + 1);
        console.log(movies);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-[1030px] bg-white">
      <h1>Genres</h1>
    
      <div className="grid gap-5 justify-items-center grid-cols-3 max-md:grid-cols-2 px-10 ">
        {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default GenrePage;
