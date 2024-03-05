import React, { useEffect } from "react";
import NavBarLayout from "../NavBarPage/NavBar";
import FooterLayout from "../FooterPage/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../Store/cart/actions";
import { fetchHeadingProducts } from "../../Store/products/Actions/headingProductsActions";
import { fetchAlProducts } from "../../Store/products/Actions/headingProductsActions";

function RootLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchHeadingProducts());
    dispatch(fetchAlProducts());
    console.log(true);
  }, [dispatch]);

  return (
    <div className=" bg-white font-mono w-screen overflow-hidden">
      <NavBarLayout />
      <Outlet />
      <FooterLayout />
    </div>
  );
}

export default RootLayout;
