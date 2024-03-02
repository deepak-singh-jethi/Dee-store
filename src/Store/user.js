import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    userName: "",
    email: "",
    password: "",
    name: {
      firstName: "",
      lastName: "",
    },
    phone: "",
    address: {
      city: "",
      street: "",
      number: "",
      zipCode: "",
      country: "",
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    },
    clearUser: (state) => {
      state.user = initialState.user;
      return state;
    },
  },
});

const userActions = userSlice.actions;

export default userActions;
