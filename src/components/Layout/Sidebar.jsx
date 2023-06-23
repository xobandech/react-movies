import { Link } from "react-router-dom";

const SideBarMenu = () => {
  return (
    <div className="min-h-[100%]">
      <div className="sticky top-[2.8rem]">
        <div className="flex box-border max-xl:hidden [&>*]:px-4 [&>*]:py-2 w-[250px] flex-col bg-[#333] text-white min-h-[100%]">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/tv-shows">TV Shows</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
