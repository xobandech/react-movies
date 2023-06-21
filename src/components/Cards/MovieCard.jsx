const MovieCard = ({ movie }) => {
    const { name, description, poster, year } = movie
    return (
        <div className="min-w-[200px] w-[18%]">
            <img className="" src={poster.url} alt={name} />
            <div className="flex justify-between">
            <h1>{name}</h1>
            <p>{year}</p>
            </div>
        </div>
    )
}
export default MovieCard