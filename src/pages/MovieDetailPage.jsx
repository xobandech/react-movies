import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const { movies } = useContext(MoviesContext);
  const [movie, setMovie] = useState(null);
  const apiKey = '1ZTHHEM-879MGTV-HBK76WM-C77A539';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.kinopoisk.dev/v1/movie/${id}`, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'X-API-KEY': apiKey
          }
        });
        const data = await response.json();
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[1030px] bg-white">
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
      {/* Render other movie details */}
    </div>
  );
}
