import {
  TRANSACTION_SUCCESS,
  TRANSACTION_FETCHING,
  TRANSACTION_FAILED
} from "./../constants";

const initialState = {
  result: null,
  isFetching: false,
  isError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TRANSACTION_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case TRANSACTION_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };
    case TRANSACTION_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    default:
      return state;
  }
};
