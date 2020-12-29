import { MYPAGE_FAILED, MYPAGE_SUCCESS, MYPAGE_FETCHING } from "../constants";

const initialState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MYPAGE_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };

    case MYPAGE_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };

    case MYPAGE_FAILED:
      return { ...state, isFetching: false, isError: true, result: null };

    default:
      return state;
  }
};
