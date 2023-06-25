import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TableRow from "../components/TableRow";
export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = process.env.REACT_APP_KINOPOISK_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.kinopoisk.dev/v1/movie/${id}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "X-API-KEY": apiKey,
            },
          }
        );
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
    <div className="bg-white w-[1030px] h-[100vh]">
      <div className="flex">
        <div className="flex flex-col items-center w-[90%]">
        {movie.poster && movie.poster.url && (
            <img
              src={movie.poster.url}
              className="max-w-[400px] w-[100%] p-6 min-w-[350px]"
              alt=""
            />
          )}
          {movie.videos && movie.videos.trailers &&  movie.videos.trailers[0] && (
            <div>
              <iframe
                title="Trailer"
                src={movie.videos.trailers[0].url}
                className="max-w-[100%]"
                frameborder="0"
              ></iframe>
              <div className="justify-between flex"></div>
            </div>
          )}
        </div>
        <div className="block py-10">
          <h1>
            {movie.name} ({movie.year})
          </h1>
          <p className="mb-6 text-[#6e7979]">{movie.ageRating}+</p>
          <button className="outline rounded-xl px-3 outline-2 outline-red-200">
            I want to view
          </button>
          <div>
            <h2>Description</h2>
            <p>{movie.description}</p>
            {movie.year && (
              <TableRow>
                <div>Year</div>
                <div>{movie.year}</div>
              </TableRow>
            )}
            <TableRow>
              <div>Country</div>
              <div>
                {movie.premiere &&
                  Object.keys(movie.premiere)[0].charAt(0).toUpperCase() +
                    Object.keys(movie.premiere)[0].slice(1)}
              </div>
            </TableRow>
            {movie.genres && (
              <TableRow>
                <div>Genre</div>
                <div>
                  {movie.genres
                    .map(
                      (genre) =>
                        genre.name.charAt(0).toUpperCase() + genre.name.slice(1)
                    )
                    .join(", ")}
                </div>
              </TableRow>
            )}
            <TableRow>
              <div>Age</div>
              <div>{movie.ageRating}+</div>
            </TableRow>
            <TableRow>
              <div>Duration</div>
              <div>
                {movie.seriesLength ? movie.seriesLength : movie.movieLength}
              </div>
            </TableRow>
          </div>
        </div>
        {/* Render other movie details */}
      </div>
    </div>
  );
}
