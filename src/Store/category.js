import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
};
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      console.log(state.category);
      return state;
    },
  },
});

const CategoryActions = categorySlice.actions;
export default CategoryActions;
