import React from "react";
import Login from "../user/Login";
import Register from "../user/Register";

const Auth = () => {
  return (
    <div className="container d-md-flex  justify-content-between">
      <Login />
      <div className="d-md-block d-sm-none d-none vr "></div>
      <div
        className="d-sm-block d-md-none hr mb-3"
        style={{
          borderBottom: "1px solid",
          width: "100%",
          color: "rgb(33 37 41 / 13%)",
        }}
      ></div>
      <Register />
    </div>
  );
};

export default Auth;
