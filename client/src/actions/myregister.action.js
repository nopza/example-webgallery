import {
  MYREGISTER_FETCHING,
  MYREGISTER_SUCCESS,
  MYREGISTER_FAILED,
} from "../constants";

export const setRegisterStateToFetch = (payload) => ({
  type: MYREGISTER_FETCHING,
  payload,
});

export const setRegisterStateToSuccess = (payload) => ({
  type: MYREGISTER_SUCCESS,
  payload,
});

export const setRegisterStateToFailed = (payload) => ({
  type: MYREGISTER_FAILED,
  payload,
});

export const register = (account) => {
  return async (dispatch) => {
    try {
      dispatch(setRegisterStateToFetch());
      setTimeout(function () {
        console.log(account);
        dispatch(setRegisterStateToSuccess(account));
      }, 1000);
    } catch (e) {
      dispatch(setRegisterStateToFailed());
    }
  };
};

// import {
//   REGISTER_FETCHING,
//   REGISTER_SUCCESS,
//   REGISTER_FAILED,
// } from "../constants";

// export const setRegisterStateToFetch = (payload) => ({
//   type: REGISTER_FETCHING,
//   payload,
// });

// export const setRegisterStateToFetch = (payload) => ({
//   type: REGISTER_FETCHING,
//   payload,
// });

// export const register = (account) => {
//   return async (dispatch) => {
//     try {
//       dispatch(setRegisterStateToFetch());
//       const result = await axios.post(
//         "http://localhost:8081/api/v2/register",
//         account
//       );
//       dispatch(setRegisterStateToSuccess(result.data));
//     } catch (e) {
//       dispatch(setRegisterStateToFailed({ error: JSON.stringify(e) }));
//     }
//   };
// };
