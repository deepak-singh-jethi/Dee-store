import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  allProductStatus: {
    status: "",
    message: "",
  },
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.allProductStatus.status = "";
      state.allProductStatus.message = "";
      return state;
    },
    setStatus: (state, action) => {
      state.allProductStatus.status = action.payload.status;
      state.allProductStatus.message = action.payload.message;
      return state;
    },
  },
});

const ProductsActions = productsSlice.actions;
export default ProductsActions;
