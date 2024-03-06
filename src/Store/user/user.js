import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("token");

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
    token: "",
  },
  userSignUp: {
    status: "",
    message: "",
  },
};
if (userToken) {
  initialState.loginInfo.isLoggedIn = true;
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    },
    setStatus: (state, action) => {
      state.userSignUp.status = action.payload.status;
      state.userSignUp.message = action.payload.message;
      return state;
    },
    setLoginInfo: (state, action) => {
      console.log(action.payload);
      state.loginInfo.isLoggedIn = action.payload.isLoggedIn;
      state.loginInfo.token = action.payload.token;
      return state;
    },
  },
});

const userActions = userSlice.actions;

export default userActions;
