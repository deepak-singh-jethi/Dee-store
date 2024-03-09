import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import cartActions from "../../Store/cart/cart";

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
    <div className="flex flex-col md:flex-row mx-4 gap-8 md:mx-12 lg:mx-24 xl:mx-32 mt-24">
      {/* Main Product */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className="md:w-3/5 border rounded-md overflow-hidden shadow-md mb-4 md:mb-0">
        <div className="relative h-[200px] sm:h-[300px] md:h-[380px] flex items-center justify-center sm:mt-0 mt-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-auto h-full object-cover"
          />
          {cartItem && (
            <div className="text-green-600 text-xl absolute top-0 right-0 bg-white rounded-full p-2">
              {cartItem.quantity}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-700 text-sm md:text-base">
            {product.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-7">
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
                } text-white px-3 py-1 rounded focus:outline-none transition duration-300 text-sm md:text-base`}
                disabled={!cartItem}>
                Remove
              </button>

              <button
                onClick={handleAddToCart}
                className="text-white px-3 py-1 rounded focus:outline-none transition duration-300 bg-green-500 hover:bg-green-600 text-sm md:text-base">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Suggested Products */}
      <div className="md:w-2/5">
        <h3 className="text-center text-xl md:text-2xl my-3">
          Suggested Products
        </h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {suggestedProducts.map((product) => (
            <Link
              to={`/${product.id}`}
              className="relative h-[200px] md:h-[300px] flex flex-col items-center justify-center hover:scale-105 shadow-md mb-4 md:mb-0"
              key={product.id}>
              <div className="h-[60%] w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-auto h-full object-cover"
                />
              </div>
              <h4 className="text-md md:text-lg font-semibold mt-2">
                {product.title}
              </h4>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
