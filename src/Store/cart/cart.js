import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalValue: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      console.log(action.payload);
      state.totalQuantity += 1;
      state.totalValue += action.payload.price;
      const newItemId = action.payload.id;
      const itemExist = state.items.find((item) => item.id === newItemId);
      if (!itemExist) {
        state.items.push({
          ...action.payload,
          quantity: 1,
          price: action.payload.price,
        });
      } else {
        itemExist.quantity += 1;
        itemExist.price += action.payload.price;
      }
      return state;
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload.id;

      const itemExist = state.items.find((item) => item.id === itemId);
      if (itemExist) {
        state.totalQuantity -= 1;
        state.totalValue -= action.payload.price;
        if (itemExist.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== itemId);
        } else {
          itemExist.quantity -= 1;
          itemExist.price -= itemExist.price;
        }
      }
      return state;
    },
  },
});

const cartActions = cartSlice.actions;
export default cartActions;
