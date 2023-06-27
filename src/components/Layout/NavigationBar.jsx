import { Link } from "react-router-dom";
import SearchComponent from "../SearchBar";
import DropdownComponent from "./DropdownMenu";

const NavigationBar = () => {

  return (
    <>
      <nav className="bg-[#201f1f] sticky z-10 top-0 [&>.link]:max-xl:hidden [&>*]:px-4 w-[100%] p-0 [&>*]:my-auto h-[2.8rem] flex flex-row  text-white">
          <Link to="/movies" className="link">Movies</Link>
          <Link to="/tv-shows" className="link">TV-Shows</Link>
        <DropdownComponent />
        <Link to="/" className="self-start">MOVIESEA</Link>
        <SearchComponent />
      </nav>
    </>
  );
};

export default NavigationBar;
