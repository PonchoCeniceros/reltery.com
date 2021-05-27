import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import results from "./results";
//Here you import and merge all the reducers

export default combineReducers({
  alert,
  auth,
  results,
});
