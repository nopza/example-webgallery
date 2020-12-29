import {
  MYREGISTER_FETCHING,
  MYREGISTER_SUCCESS,
  MYREGISTER_FAILED,
} from "../constants";

const initialState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MYREGISTER_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };

    case MYREGISTER_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };

    case MYREGISTER_FAILED:
      return { ...state, isFetching: false, isError: true, result: null };

    default:
      return state;
  }
};

// import {
//   MYREGISTER_FAILED,
//   MYREGISTER_FETCHING,
//   MYREGISTER_SUCCESS,
// } from "../constants";

// const initialState = {
//   result: null,
//   isFetching: false,
//   isError: false,
// };

// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case MYREGISTER_FETCHING:
//       return { ...state, result: null, isFetching: true, isError: false };
//     case MYREGISTER_SUCCESS:
//       return { ...state, result: payload, isFetching: false, isError: false };
//     case MYREGISTER_FAILED:
//       return { ...state, result: payload, isFetching: false, isError: true };
//     default:
//       return state;
//   }
// };
