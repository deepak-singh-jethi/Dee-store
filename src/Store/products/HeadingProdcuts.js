import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headingProducts: [],
  statusOfLoading: {
    status: "",
    message: "",
  },
};
export const headingProdcutSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.headingProducts = action.payload;
      state.statusOfLoading = {
        status: "",
        message: "",
      };
      return state;
    },
    setStatus: (state, action) => {
      state.statusOfLoading = action.payload;
      return state;
    },
  },
});

const headingProdcutAction = headingProdcutSlice.actions;
export default headingProdcutAction;
