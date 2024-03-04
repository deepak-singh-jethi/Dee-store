import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalValue: 0,
  status: {
    isLoading: false,
    isError: false,
  },
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItemId = action.payload.id;
      const newItem = action.payload;
      state.totalQuantity++;
      state.totalValue += newItem.price;
      state.status.isLoading = false;
      state.status.isError = false;
      const existingItem = state.items.find((item) => item.id === newItemId);
      if (!existingItem) {
        state.items.push({
          id: newItemId,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      return state;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalValue -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      return state;
    },
  },
});

const cartActions = cartSlice.actions;
export default cartActions;
