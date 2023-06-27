import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/Cards/MovieCard";
const genres = {
  anime: "аниме",
  biography: "биография",
  action: "боевик",
  western: "вестерн",
  war: "военный",
  detective: "детектив",
  children: "детский",
  adult: "для взрослых",
  documentary: "документальный",
  drama: "драма",
  game: "игра",
  history: "история",
  comedy: "комедия",
  concert: "концерт",
  "short-film": "короткометражка",
  crime: "криминал",
  melodrama: "мелодрама",
  music: "музыка",
  animation: "мультфильм",
  musical: "мюзикл",
  news: "новости",
  adventure: "приключения",
  family: "семейный",
  sport: "спорт",
  "talk-show": "ток-шоу",
  thriller: "триллер",
  horror: "ужасы",
  "science-fiction": "фантастика",
  "film-noir": "фильм-нуар",
  fantasy: "фэнтези",
  ceremony: "церемония",
};

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
          `https://api.kinopoisk.dev/v1.3/movie?page=${currentPage}&limit=12&genres.name=${genres[genre]}`,
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
