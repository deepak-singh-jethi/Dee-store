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
  loginInfo: {
    isLoggedIn: false,
  },
  status: {
    isLoading: false,
    isError: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loginInfo.isLoggedIn = true;
      state.status.isError = null;
      state.status.isLoading = false;
      return state;
    },
    clearUser: (state) => {
      state.user = initialState.user;
      state.loginInfo.isLoggedIn = false;
      state.status.isError = null;
      state.status.isLoading = false;
      return state;
    },
  },
});

const userActions = userSlice.actions;

export default userActions;
