import { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  SET_LOADING,
} from "../types";
import axios from "axios";
import setTokenInHeader from "../../utils/setTokenInHeader";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.getItem("token")) {
      setTokenInHeader(localStorage.getItem("token"));
    }
    try {
      const res = await axios.get("/user");
      dispatch({ type: USER_LOADED, payload: res.data.user });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
    }
  };

  //Register User
  const registerUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/register", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
      //Setting Token in local storage here, instead of dispatch since I was unable to fetch token inside loadUser(); in time
      localStorage.setItem("token", res.data?.token);
      loadUser();
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
    }
  };

  //Login User
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/login", formData, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      //Setting Token in local storage here, instead of dispatch since I was unable to fetch token inside loadUser(); in time
      localStorage.setItem("token", res.data?.token);
      loadUser();
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };

  //Logout user
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  //clear errors
  const clearError = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  //set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        registerUser,
        clearError,
        loadUser,
        login,
        logout,
        setLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
