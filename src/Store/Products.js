import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      console.log(state.products);
      return state;
    },
  },
});

const ProductsActions = productSlice.actions;
export default ProductsActions;
