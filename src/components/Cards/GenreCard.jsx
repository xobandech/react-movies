import { Link } from "react-router-dom"

const GenreCard = ({ genre }) => {
    return (
        <Link to={`genres/${genre.slug}`}> 
        <div className="min-w-[100px] max-w-[200px]">
            <img src="" alt="" />
            {genre.name}
        </div>
        </Link>
    )
}
export default GenreCard