import { Link, Outlet } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <nav className="bg-[#333] [&>*]:px-4 [&>*]:my-auto h-[2.8rem] flex flex-row  justify-center text-white">
        <Link to="/">Home</Link>
        <Link to="/Movies">Movies</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default NavigationBar;
