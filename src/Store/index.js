import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/user";
import { categorySlice } from "./cart/category";
import { productsSlice } from "./products/Products";
import { cartSlice } from "./cart/cart";
import { headingProdcutSlice } from "./products/HeadingProdcuts";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    category: categorySlice.reducer,
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    headingProducts: headingProdcutSlice.reducer,
  },
});
