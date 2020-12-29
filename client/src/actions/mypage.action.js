import { MYPAGE_FETCHING, MYPAGE_SUCCESS, MYPAGE_FAILED } from "../constants";
import axios from "axios";

export const setMypageStateToFetch = (payload) => ({
  type: MYPAGE_FETCHING,
  payload,
});

export const setMypageStateToSuccess = (payload) => ({
  type: MYPAGE_SUCCESS,
  payload,
});

export const setMypageStateToFailed = (payload) => ({
  type: MYPAGE_FAILED,
  payload,
});

export const mypage = (account) => {
  return async (dispatch) => {
    try {
      dispatch(setMypageStateToFetch());
      const result = await axios.post(
        "http://localhost:8081/api/v2/login",
        account
      );
      dispatch(setMypageStateToSuccess(result.data));
    } catch (e) {
      dispatch(setMypageStateToFailed());
    }
  };
};
