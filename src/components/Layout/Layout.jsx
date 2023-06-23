import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import PageContainer from "../PageContainer";
import { Outlet } from "react-router-dom";
import SideBarMenu from "./Sidebar";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <PageContainer>
        <SideBarMenu />
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
};

export default Layout;
