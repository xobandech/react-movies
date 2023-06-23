const MovieCard = ({ movie }) => {
  const { name, id, poster, year } = movie;
  return (
    <div className="min-w-[100px] max-w-[200px]">
      <a href={`movie/${id}`}>
        <img className="" src={poster.url} alt={name} />
      <div className="flex justify-between">
          <p className="text-[1em] text-ellipsis overflow-hidden whitespace-nowrap w-[90%]">
            {name}
          </p>
          <p>{year}</p>
      </div>
      </a>
    </div>
  );
};
export default MovieCard;
