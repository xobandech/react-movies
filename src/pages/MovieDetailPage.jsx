import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const { movies } = useContext(MoviesContext);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.find((movie) => movie.id === parseInt(id));
    setMovie(selectedMovie);
  }, [movies, id]);

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
