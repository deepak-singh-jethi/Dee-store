import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  statusOfAction: {
    status: "",
    message: "",
  },
};
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      return state;
    },
    setStatus: (state, action) => {
      state.statusOfAction.status = action.payload.status;
      state.statusOfAction.message = action.payload.message;

      return state;
    },
  },
});

const CategoryActions = categorySlice.actions;
export default CategoryActions;
