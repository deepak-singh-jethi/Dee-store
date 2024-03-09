import React from "react";
import NavBar from "../../Component/NavBar/NavBar";

function NavBarLayout({ totalQuantity }) {
  return (
    <>
      <NavBar totalQuantity={totalQuantity}></NavBar>
    </>
  );
}

export default NavBarLayout;
