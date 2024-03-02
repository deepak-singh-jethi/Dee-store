import React from "react";
import NavBarLayout from "../NavBarPage/NavBar";
import FooterLayout from "../FooterPage/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="w-screen">
      <NavBarLayout />
      <Outlet />
      <FooterLayout />
    </div>
  );
}

export default RootLayout;
