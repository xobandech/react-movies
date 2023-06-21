import { Link } from "react-router-dom"

const SideBarMenu = () => {
  return (
    <div className="flex max-xl:hidden [&>*]:px-4 [&>*]:py-2 w-[250px] flex-col bg-[#333] text-white h-[100%]">
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/tv-shows">TV Shows</Link>
    </div>
  );
}

export default SideBarMenu;
