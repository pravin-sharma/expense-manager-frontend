import {
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
      };
    case LOGIN_FAIL:
      return {
        ...state,
      };
    case USER_LOADED:
      return {
        ...state,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
      };
    case REGISTER_FAIL:
      return {
        ...state,
      };

    case AUTH_ERROR:
      return {
        ...state,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
      };
    case LOGOUT:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
