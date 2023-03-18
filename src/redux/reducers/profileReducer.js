import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from "../types";

const initialState = {
  profile: null, // to hold current user profile
  profiles: [], // to hold all profiles
  error: {},
  loading: true,
  repos: [], // to hold all github repositories
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      // to retrieve, update, create.
      return { ...state, profile: payload, loading: false };
    case PROFILE_ERROR:
      return { ...state, error: payload, loading: false, profile: null };

    default:
      return state;
  }
};
