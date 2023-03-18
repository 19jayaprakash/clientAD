import api from "../../utils/api";
import setAuthToken from "../../utils/setAuthToken";
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from "../types";
export const addExperience = (data) => async (dispatch) => {
  setAuthToken(localStorage.getItem("token"));
  await api
    .put("/profile/experience", data)
    .then((res) => {
      dispatch({ type: UPDATE_PROFILE, payload: res.data });
    })
    .catch((err) => {
      console.log(err.response.data.msg);
      dispatch({ type: PROFILE_ERROR, payload: err.response.data.msg });
    });

  /// we need to perform the rest call.
};
// createProfile action
// it should work for creating a new profile or should help us for editing the profile.
export const createProfile =
  (data, edit = false) =>
  async (dispatch) => {
    console.log("hello from createProfile");
    // rest call
    setAuthToken(localStorage.getItem("token"));
    api
      .post("/profile", data)
      .then((res) => {
        dispatch({ type: GET_PROFILE, payload: res.data });
      })
      // to the user that we have completed the edit or create profile work?
      // we will expect an alert
      .catch((err) => {
        console.log(err.response.data);
      });
  };
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
