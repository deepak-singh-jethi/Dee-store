import { motion } from "framer-motion";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";
import CartItem from "./CartItem";

const Cart = ({ items, totalQuantity, totalValue }) => {
  return (
    <ScrollBottomToTop>
      <div className="mx-auto p-4 bg-white rounded shadow mt-16 min-h-[600px]">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-300 pb-2 text-center">
          Shopping Cart
        </h2>
        <div className="w-full mx-auto">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-4 w-full mx-auto flex flex-col justify-center items-end">
          <p className="text-gray-700">
            Total Quantity:{" "}
            <span className="font-semibold">{totalQuantity}</span>
          </p>
          <p className="text-gray-700 mt-2">
            Total Value:
            <span className="font-semibold">
              &#8377; {totalValue.toFixed(2)}
            </span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none">
            Proceed to Checkout
          </motion.button>
        </div>
      </div>
    </ScrollBottomToTop>
  );
};

export default Cart;
