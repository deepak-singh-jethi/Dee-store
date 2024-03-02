import React from "react";
import NavBarLayout from "../NavBarPage/NavBar";
import FooterLayout from "../FooterPage/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <NavBarLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
}

export default RootLayout;
