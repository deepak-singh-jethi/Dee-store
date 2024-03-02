import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user";
import { categorySlice } from "./category";
import { productsSlice } from "./Products";
import { cartSlice } from "./cart";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    category: categorySlice.reducer,
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
