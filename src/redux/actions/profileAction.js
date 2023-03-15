import api from "../../utils/api";
import setAuthToken from "../../utils/setAuthToken";
import { PROFILE_ERROR } from "../types";

// getCUrrentProfile : to get the current profile of the user.
export const getCurrentProfile = () => async (dispatch) => {
  setAuthToken(localStorage.getItem("token"));
  await api
    .get("/profile/me")
    .then()
    .catch((err) => {
      console.log(err.response.data.msg);
      dispatch({ type: PROFILE_ERROR, payload: err.response.data.msg });
    });
};
