import { combineReducers } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export default reducers;

// combine reducers will help us to hold all reducers in our application.
// every reducer will get type and data
// type: type flag
// data: data to be used to manipulate the store.
