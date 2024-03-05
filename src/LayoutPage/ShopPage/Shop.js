import React from "react";
import { useSelector } from "react-redux";
import Shop from "../../Component/Shop/Shop";

function ShopLayout() {
  const store = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.category);
  console.log(store.products);

  return <Shop products={store.products} categories={category} />;
}

export default ShopLayout;
