import { useState, useEffect, useContext } from "react";
import MovieCard from "../components/Cards/MovieCard";
import { MoviesContext } from "../contexts/MoviesContext";

export default function MoviesPage() {
  const { movies, setMovies } = useContext(MoviesContext);
  const { loadedPages, setLoadedPages } = useContext(MoviesContext);
  const { currentPage, setCurrentPage } = useContext(MoviesContext);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoviesOnScroll = async () => {
    const apiKey = "1ZTHHEM-879MGTV-HBK76WM-C77A539";
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.kinopoisk.dev/v1.3/movie?page=${currentPage}&limit=12`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-API-KEY": apiKey,
          },
        }
      );
      const data = await response.json();
      if (!loadedPages.includes(currentPage))
      setMovies([...movies, ...data.docs]);
      setLoadedPages([...loadedPages, currentPage]);
      console.log(loadedPages);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMoviesOnScroll(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const isScrolledToEnd = scrollTop + clientHeight >= scrollHeight - 5;
      if (isScrolledToEnd && !isLoading) {
        setCurrentPage(currentPage + 1);
        console.log(movies);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, isLoading]);

  return (
    <>
      <div className="w-[1030px] bg-white">
        <h1>Movies</h1>
        <form onSubmit={loadMoviesOnScroll}>
          <input type="text" />
          <button type="submit">Get Movie by ID</button>
        </form>

        <div className="grid gap-5 justify-items-center grid-cols-3 max-md:grid-cols-2 px-10 ">
          {movies.map(({ poster, name, year, description, id }) => {
            const movie = { poster, name, year, description, id };
            return <MovieCard key={id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}
