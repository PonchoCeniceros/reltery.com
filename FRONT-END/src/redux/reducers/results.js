import { SET_RESULT, RESULT_ERROR, REMOVE_RESULT } from "../actions/types";

const initialState = {
  result: null,
  loading: true,
  error: false,
  redirect: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_RESULT:
      return {
        ...state,
        result: payload,
        loading: false,
      };

    case RESULT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case REMOVE_RESULT:
      return {
        result: null,
        loading: true,
        error: false,
        redirect: false,
      };

    default:
      return state;
  }
}
