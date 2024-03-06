import React from "react";
import { useSelector } from "react-redux";
import Shop from "../../Component/Shop/Shop";

function ShopLayout() {
  const store = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.category);

  return <Shop products={store.products} categories={category} />;
}

export default ShopLayout;
