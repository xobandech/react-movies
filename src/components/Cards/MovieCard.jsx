const MovieCard = ({ movie }) => {
    const { name, description, poster, year } = movie
    return (
        <div className="min-w-[100px] max-w-[200px]">
            <img className="" src={poster.url} alt={name} />
            <div className="flex justify-between">
            <p className="text-[1em] text-ellipsis overflow-hidden whitespace-nowrap w-[90%]">{name}</p>
            <p>{year}</p>
            </div>
        </div>
    )
}
export default MovieCard