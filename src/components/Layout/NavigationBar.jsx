import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <>
      <nav className="bg-[#201f1f] sticky z-10 top-0 [&>*]:px-4 w-[100%] p-0 [&>*]:my-auto h-[2.8rem] flex flex-row  text-white">
        <Link to="/" className="self-start">KINOMORE</Link>
        <div className="justify-center [&>.link]:xl:hidden [&>a]:px-5 flex w-[100%]">
        <Link to="/movies" className="link">Movies</Link>
        <Link to="/tv-shows" className="link">TV-Shows</Link>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
