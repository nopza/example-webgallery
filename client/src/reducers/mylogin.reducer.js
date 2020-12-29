import {
  MYLOGIN_FETCHING,
  MYLOGIN_SUCCESS,
  MYLOGIN_FAILED,
} from "../constants";

const initialState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MYLOGIN_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };

    case MYLOGIN_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };

    case MYLOGIN_FAILED:
      return { ...state, isFetching: false, isError: true, result: null };

    default:
      return state;
  }
};
