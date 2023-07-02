import { Link } from "react-router-dom";

const GenreCard = ({ genre }) => {
  return (
    <div className="min-w-[100px] mb-10 ml-4 max-w-[200px]  relative">
      <Link to={`genres/${genre.slug}`}>
        <div style={{ position: "relative" }}>
          <img src={`https://loremflickr.com/320/240/${genre.slug}`} alt="" />
          <div className="flex items-center z-10 justify-center absolute inset-0">
            <h2 className="text-center text-white">{genre.name}</h2>
          </div>
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default GenreCard;
