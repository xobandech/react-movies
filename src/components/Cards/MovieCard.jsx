import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, name, poster, year } = movie;
  return (
    <div className="min-w-[100px] max-w-[200px]">
      <Link to={`/movies/${id}`} className="w-[100%]">
        <img className="w-[100%]" src={poster && poster.url ? poster.url : poster} alt={name} />
        <div className="justify-between">
          <p className="text-[1em] max-sm:max-w-[15ch] text-ellipsis overflow-hidden whitespace-nowrap w-[90%]">
            {name}
          </p>
          <p>{year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
