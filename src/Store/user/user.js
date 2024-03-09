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
  userStatus: {
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
      console.log(action.payload);
      state.userStatus.status = action.payload.status;
      state.userStatus.message = action.payload.message;
      return state;
    },
    setLoginInfo: (state, action) => {
      state.loginInfo.isLoggedIn = action.payload.isLoggedIn;
      state.loginInfo.token = action.payload.token;
      state.userStatus.status = "";
      state.userStatus.message = "";

      return state;
    },
  },
});

const userActions = userSlice.actions;

export default userActions;
