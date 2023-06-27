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
    <div className="bg-white w-[1030px] min-h-[100vh]">
      <div className="flex max-sm:block">
        <div className="ml-4 hidden max-sm:block">
          <h1>
            {movie.name} ({movie.year})
          </h1>
          <p className=" text-[#6e7979]">
            {movie.ageRating ? movie.ageRating : 16}+
          </p>
        </div>

        <div className="flex flex-col items-center">
          {movie.poster && movie.poster.url && (
            <img
              src={movie.poster.url}
              className="max-w-[500px] w-[100%] max-sm:w-[200px]  max-sm:min-w-[300px] p-6 min-w-[350px]"
              alt="movie poster"
            />
          )}
          {movie.videos &&
            movie.videos.trailers &&
            movie.videos.trailers[0] && (
              <div className="max-sm:hidden">
                <iframe
                  title="Trailer"
                  src={movie.videos.trailers[0].url}
                  className="max-w-[100%] max-sm:max-w-[70%]"
                  frameborder="0"
                ></iframe>
              </div>
            )}
        </div>
        <div className="block max-sm:flex max-sm:justify-center mx-4 flex-col">
          <h1 className="max-sm:hidden">
            {movie.name} ({movie.year})
          </h1>
          <p className="mb-6 max-sm:hidden max-sm:mb-0 text-[#6e7979]">
            {movie.ageRating ? movie.ageRating : 16}+
          </p>
          <button className="outline rounded-xl w-[45%] px-3 outline-2 outline-red-200">
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
                {movie.premiere && movie.premiere[0] && 
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
              <div>{movie.ageRating ? movie.ageRating : 16}+</div>
            </TableRow>
            <TableRow>
              <div>Duration</div>
              <div>
                {movie.seriesLength ? movie.seriesLength : movie.movieLength}{" "}
                min.
              </div>
            </TableRow>
          </div>
          {movie.videos &&
            movie.videos.trailers &&
            movie.videos.trailers[0] && (
          <div className="my-10 max-sm:flex max-sm:justify-center sm:hidden">
            <iframe
              title="Trailer"
              src={movie.videos.trailers[0].url}
              className="max-w-[100%] max-sm:max-w-[70%]"
              frameborder="0"
            ></iframe>
          </div>
            )}
        </div>
        {/* Render other movie details */}
      </div>
    </div>
  );
}
