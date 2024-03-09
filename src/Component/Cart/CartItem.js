import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import cartActions from "../../Store/cart/cart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const onAddToCart = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };
  const onRemoveFromCart = (item) => {
    dispatch(cartActions.removeItemFromCart(item));
  };

  return (
    <div className="border-b border-gray-300 overflow-hidden">
      <div
        className="flex items-center justify-between p-4 cursor-pointer transition duration-300 hover:bg-gray-100"
        onClick={handleToggleExpand}>
        <div className="flex items-center space-x-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 object-cover rounded"
          />
          <AnimatePresence>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`text-gray-600 w-[70%] ${
                  isExpanded ? "" : "max-w-xs overflow-hidden"
                }`}>
                {isExpanded ? item.description : ""}
              </motion.p>
            </div>
          </AnimatePresence>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-gray-700">
            Quantity: <span className="font-semibold">{item.quantity}</span>
          </p>
          <p className="text-gray-700">
            Total Price:{" "}
            <span className="font-semibold">
              {" "}
              &#8377;{item.itemTotalPrice.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0.7, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, y: -40 }}
            className="p-4 bg-gray-100 flex justify-between items-center">
            <p className="text-gray-700">
              Item Price: &#8377;{item.price.toFixed(2)}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => onAddToCart(item)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none transition duration-300">
                +
              </button>
              <button
                onClick={() => onRemoveFromCart(item)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none transition duration-300">
                -
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartItem;
