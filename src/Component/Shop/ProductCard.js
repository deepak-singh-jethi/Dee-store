import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import cartActions from "../../Store/cart/cart";

const ProductCard = ({ product, handleModal, isLoggedIn }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      handleModal();
      return;
    }
    dispatch(cartActions.addItemToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    if (!isLoggedIn) {
      handleModal();
      return;
    }
    dispatch(cartActions.removeItemFromCart(product));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      whileInView={{ y: [40, 0] }}
      layout
      className="bg-slate-100 p-4 border rounded-md shadow-md h-[300px] sm:h-[350px] flex flex-col justify-between offer-card">
      <div className="w-full h-2/3 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col mt-4">
        <h3 className="text-[10px] sm:text-[11px] md:text-[12px] font-semibold mb-2 text-center">
          {product.title}
        </h3>
        <div className="flex items-center justify-around mb-2">
          <span className="text-gray-700 text-[10px] sm:text-[11px] md:text-[12px] ">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-teal-500 text-[10px] sm:text-[11px] md:text-[12px]">
            {product.rating.rate} stars
          </span>
        </div>

        <div className="flex justify-around">
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-teal-600 text-[10px] sm:text-[11px] md:text-[12px] cursor-pointer"
            onClick={() => handleRemoveFromCart(product)}>
            -
          </button>
          <span className="text-gray-700 text-[10px] sm:text-[11px] md:text-[12px]"></span>
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded-full ml-2 hover:bg-teal-600 text-[10px] sm:text-[11px] md:text-[12px] cursor-pointer"
            onClick={() => handleAddToCart(product)}>
            +
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
