import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, name, poster, year } = movie;
  return (
    <div className="min-w-[100px] max-w-[200px]">
      <Link to={`/movies/${id}`}>
        <img className="" src={poster.url} alt={name} />
        <div className="flex justify-between">
          <p className="text-[1em] text-ellipsis overflow-hidden whitespace-nowrap w-[90%]">
            {name}
          </p>
          <p>{year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
