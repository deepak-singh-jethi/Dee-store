import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import cartActions from "../../Store/cart/cart";
import { Link } from "react-router-dom";

const Product = ({ product, products, onAddToCart, onRemoveFromCart }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);
  const cartItem = items.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(cartActions.removeItemFromCart(product));
  };
  const suggestedProducts = products.slice(0, 4);

  return (
    <div className="flex h-screen justify-between mt-24 space-x-8 w-full px-20">
      {/* Main Product */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0, x: -100 }}
        className="w-3/5 border rounded-md overflow-hidden shadow-md ">
        <div className="relative h-[380px] flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-auto h-full object-center"
          />
          {cartItem && (
            <div className="text-green-600 text-5xl  absolute top-0 right-0 bg-white rounded-md p-2">
              {cartItem.quantity}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-700">{product.description}</p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-gray-700">
                Price: <span className="font-semibold">${product.price}</span>
              </p>
              <p className="text-gray-700">
                Rating:{" "}
                <span className="font-semibold">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleRemoveFromCart}
                className={`${
                  cartItem
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white px-4 py-2 rounded focus:outline-none transition duration-300`}
                disabled={!cartItem}>
                Remove from Cart
              </button>

              <button
                onClick={handleAddToCart}
                className="ext-white px-4 py-2 rounded focus:outline-none transition duration-300 bg-green-500 hover:bg-green-">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Suggested Products */}
      <div className="w-2/5 mr-4">
        <h3 className="text-center text-2xl my-3">Suggested Products</h3>
        <motion.div className="grid grid-cols-2 gap-6   ">
          {suggestedProducts.map((product) => {
            return (
              <Link
                to={`/${product.id}`}
                className="relative h-[300px] flex flex-col items-center justify-center hover:scale-105 shadow-xl"
                key={product.id}>
                <div className="h-[60%]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-auto h-full object-cover"
                  />
                </div>

                <h4 className="text-lg font-semibold mt-2">{product.title}</h4>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
