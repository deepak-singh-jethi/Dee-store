import React from "react";
import Cart from "../../Component/Cart/Cart";
import { useSelector } from "react-redux";

function CartLayout() {
  const { items, totalQuantity, totalValue } = useSelector(
    (state) => state.cart
  );
  return (
    <Cart
      items={items}
      totalQuantity={totalQuantity}
      totalValue={totalValue}></Cart>
  );
}

export default CartLayout;
