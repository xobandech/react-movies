import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar.tsx";
import Footer from "./Footer.tsx";
import PageContainer from "../PageContainer";
import SideBarMenu from "./Sidebar.tsx";
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
