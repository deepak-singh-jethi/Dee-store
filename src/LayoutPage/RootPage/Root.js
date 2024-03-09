import React, { useEffect } from "react";
import NavBarLayout from "../NavBarPage/NAvBar";
import FooterLayout from "../FooterPage/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../Store/cart/actions";
import { fetchHeadingProducts } from "../../Store/products/Actions/headingProductsActions";
import { fetchAlProducts } from "../../Store/products/Actions/headingProductsActions";

function RootLayout() {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchHeadingProducts());
    dispatch(fetchAlProducts());
    console.log(true);
  }, [dispatch]);

  return (
    <div className=" bg-white font-mono w-screen overflow-hidden">
      <NavBarLayout totalQuantity={totalQuantity} />
      <Outlet />
      <FooterLayout />
    </div>
  );
}

export default RootLayout;
