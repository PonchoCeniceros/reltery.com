import axios from "axios";
import {
  SET_RESULT,
  RESULT_ERROR,
  REMOVE_RESULT,
} from "../redux/actions/types";

export const calculatePropertyValue = (data) => async (dispatch) => {
  try {
    let res;
    let config = {
      url: "https://relteryapp.herokuapp.com/API/v1.0/compute-by-mlp",
      method: "post",
      data: data,
    };

    await axios(config).then((response) => {
      res = { ...data, answer: response.data }; // llamada aqui
    });

    console.log(res);

    dispatch({
      type: SET_RESULT,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: RESULT_ERROR,
      payload: { status: err },
    });
  }
};

export const removeResult = () => async (dispatch) => {
  dispatch({
    type: REMOVE_RESULT,
    payload: null,
  });
};
