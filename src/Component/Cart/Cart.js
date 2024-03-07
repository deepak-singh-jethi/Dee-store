import React from "react";
import ScrollBottomToTop from "../../FramerAnimation/ScrollFramer";

const CartItem = ({ item }) => (
  <div className="flex items-center justify-between border-b border-gray-300 p-4">
    <div className="flex items-center space-x-4 w-3/4">
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600 max-w-xs truncate">{item.description}</p>
      </div>
    </div>
    <div className="flex items-center w-1/4 justify-end space-x-4">
      <div>
        <p className="text-gray-700">Quantity: {item.quantity}</p>
        <p className="text-gray-700">Price: ${item.price}</p>
        <p className="text-gray-700">Total: ${item.quantity * item.price}</p>
      </div>
    </div>
  </div>
);

const Cart = ({ items, totalQuantity, totalValue }) => {
  return (
    <ScrollBottomToTop>
      <div className="mx-auto p-4 bg-gray-100 rounded shadow mt-20 min-h-[600px]">
        <h2 className="text-4xl font-bold mb-4 text-center">Shopping Cart</h2>
        <div className="w-full mx-auto">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-4 w-full mx-auto flex flex-col justify-center items-center">
          <p className="text-gray-700 ">Total Quantity: {totalQuantity}</p>
          <p className="text-gray-700 mt-2">
            Total Value: ${totalValue.toFixed(2)}
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
            Checkout
          </button>
        </div>
      </div>
    </ScrollBottomToTop>
  );
};

export default Cart;
