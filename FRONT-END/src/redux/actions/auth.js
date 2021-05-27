import { USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGOUT, HIDE } from "./types";
import { getUsers } from "../../utils/mock-data";
import setAuthToken from "../../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = getUsers("a307718");

    dispatch({
      type: USER_LOADED,
      payload: res,
    });
    setAuthToken(res.token, res.userId);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
    setAuthToken(null, null);
  }
};
