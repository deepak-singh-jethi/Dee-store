import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../Component/product/Product";
import { useSelector } from "react-redux";

const ProductLayout = () => {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.products);
  if (!products) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <h1 className="text-5xl">Products product...</h1>
      </div>
    );
  }
  const product = products.find((product) => product.id === +productId);

  return (
    <Product product={product} products={products}>
      Product
    </Product>
  );
};

export default ProductLayout;
