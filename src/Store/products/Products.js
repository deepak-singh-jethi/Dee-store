import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  status: {
    isLoading: false,
    isError: false,
  },
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.status.isLoading = false;
      state.status.isError = false;
      console.log(state.products);
      return state;
    },
  },
});

const ProductsActions = productsSlice.actions;
export default ProductsActions;
