import React from "react";
import Login from "../user/Login";
import Register from "../user/Register";

const Auth = () => {
  return (
    <div className="container d-flex justify-content-between">
      <Login />
      <Register />
    </div>
  );
};

export default Auth;
