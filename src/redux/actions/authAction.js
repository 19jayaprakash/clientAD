import api from "../../utils/api";
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../types";
export const login = (data) => (dispatch) => {
  ///api/auth
  // /auth
  api
    .post("/auth", data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch();
};

export const register = (data) => (dispatch) => {
  // perform the rest call
  api
    .post("/users", data)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.token,
      });
      //
    })
    .catch((err) => {});
};
