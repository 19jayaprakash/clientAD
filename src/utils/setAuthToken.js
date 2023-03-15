import api from "./api";

const setAuthToken = (token) => {
  if (token) {
    // add the token
    api.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    // your axios will have token (may be situation)
    delete api.defaults.headers.common["x-auth-token"];
    // removing token frowm Localstorage.
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
