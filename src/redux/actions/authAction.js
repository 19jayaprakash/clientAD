import { REGISTER_SUCCESS } from "../types";

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
