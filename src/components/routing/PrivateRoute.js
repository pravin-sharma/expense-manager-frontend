import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
const PrivateRoute = (props) => {
  const { Component }= props
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated?<Component />:<Navigate to='/'/>
};

export default PrivateRoute
