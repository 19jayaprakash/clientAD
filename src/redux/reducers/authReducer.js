// generate the reducer details
//rxReducer
// its going to hold the data w.r.t. user.

import { LOGIN_SUCCESS, REGISTER_SUCCESS, USER_LOADED } from "../types";

// token : used to perform all rest calls
// needs to be stored and used across the application
// loading : to manage the spinner status
// active or inactive(used for spinner)
// isAuthenticated : true/false
// user : user details we should hold it.

// any field which is starting with is word then it will hold boolean value.

const initialState = {
  token: "",
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default (state = initialState, action) => {
  // destructing.
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return { ...state, user: payload, loading: false };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      // what needs to be updated in store that information we have to provide it to the store

      // once the registration is done successfully then we need to do the following operations:
      //1. store the token which is used to perform later rest api calls.
      // localStorage : setItem : to store the token
      localStorage.setItem("token", payload);
      // who will provide the payload data : action
      // whenever we need the details we will use getItem method.

      //2. we need to update the authentication status : possible

      //3. change the loading flag from true to false : possible
      //4. we need to hold the user details.
      // here we will get the details from the action where we will perform our rest call.

      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: payload,
      };

    default:
      return state;
  }
};
