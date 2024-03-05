import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // console.log("shoppping cart");

  return (
    <div className="bg-white p-4 border rounded-md shadow-md h-[450px] flex flex-col justify-between">
      <div className="w-full h-2/3 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col mt-4">
        <h3 className="text-lg font-semibold mb-2 text-center">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 ">${product.price.toFixed(2)}</span>
          <span className="text-teal-500">{product.rating.rate} stars</span>
        </div>

        <div className="flex justify-around">
          <button
            className="bg-teal-500 text-white px-3 py-1 rounded-full mr-2 hover:bg-teal-600"
            onClick={handleDecrement}>
            -
          </button>
          <span className="text-gray-700">{quantity}</span>
          <button
            className="bg-teal-500 text-white px-3 py-1 rounded-full ml-2 hover:bg-teal-600"
            onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
