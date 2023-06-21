const MovieCard = ({ movie }) => {
    const { name, description, logo, year } = movie
    return (
        <div>
            <h1>{name}</h1>
            <img src={logo} alt={name} />
            <p>{description}</p>
            <p>{year}</p>
        </div>
    )
}
export default MovieCard