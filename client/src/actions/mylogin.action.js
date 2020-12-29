import {
  MYLOGIN_FETCHING,
  MYLOGIN_SUCCESS,
  MYLOGIN_FAILED,
} from "../constants";

import axios from "axios";

export const setLoginStateToFetch = (payload) => ({
  type: MYLOGIN_FETCHING,
  payload,
});

export const setLoginStateToSuccess = (payload) => ({
  type: MYLOGIN_SUCCESS,
  payload,
});

export const setLoginStateToFailed = (payload) => ({
  type: MYLOGIN_FAILED,
  payload,
});

export const login = (account) => {
  return async (dispatch) => {
    try {
      dispatch(setLoginStateToFetch());
      const result = await axios.post(
        "http://localhost:8081/api/v2/login",
        account
      );
      dispatch(setLoginStateToSuccess(result.data));
    } catch (e) {
      dispatch(setLoginStateToFailed({ error: JSON.stringify(e) }));
    }
  };
};
