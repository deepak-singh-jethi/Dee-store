import userActions from "./user";

export const signUpUser = (user) => {
  return async (dispatch) => {
    const body = {
      email: user.email,
      username: user.userName,
      password: user.password,
      name: {
        firstname: user.userName,
        lastname: user.userName,
      },
      address: {
        city: user.address.city,
        street: user.address.street,
        number: 3,
        zipcode: user.address.zipCode,
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: user.phone,
    };

    console.log(body);

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...body }),
      });

      const data = await response.json();
      //store user info in local storage
      //and store user info in redux store
      localStorage.setItem("user", JSON.stringify(body));
      dispatch(userActions.setUser(body));
    } catch (error) {
      dispatch(
        userActions.setStatus({
          status: "error",
          message: error.message,
        })
      );
    }
  };
};

// login function
export const loginUser = (user) => {
  return async (dispatch) => {
    const body = {
      username: "mor_2314",
      password: "83r5^_",
    };
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...body }),
      });
      const data = await response.json();
      //store token in local storage
      //store token in redux store and change the loginState

      console.log(data);
      localStorage.setItem("token", JSON.stringify(data));
      dispatch(
        userActions.setLoginInfo({
          isLoggedIn: true,
          token: data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
