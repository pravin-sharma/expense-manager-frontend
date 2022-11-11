import React, { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = () => {
  const navigate = useNavigate();

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { registerUser, error, isAuthenticated, clearError } = authContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = user;

  useEffect(() => {
    if (error) {
      setAlert(`Register: ${error}`, "danger");
      clearError();
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) {
      setAlert(`User with Email: ${email} Registered`, "success");
      navigate("/home");
      clearField();
    }
  }, [isAuthenticated]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isPasswordMatched()) {
      setAlert("Password does not match.", "danger");
      return;
    }

    registerUser({
      name,
      email,
      password,
    });

    // clearField();
  };

  const isPasswordMatched = () => {
    return password === confirmPassword;
  };

  const clearField = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Fragment>
<div className="container py-4 mt-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <div className="">
                  <h2 className="fw-bold mb-2 text-uppercase text-white">
                    Register
                  </h2>
                  <p className="text-white-50 mb-5 text-white">
                    Please enter your Name, Email and Password to Register
                  </p>

                  <div className="form-floating form-outline form-white mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name"
                      value={name}
                      onChange={onChange}
                    />
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                  </div>

                  <div className="form-floating form-outline form-white mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={onChange}
                    />
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control form-control-lg"
                      placeholder="Enter Password"
                      value={password}
                      onChange={onChange}
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control form-control-lg"
                      placeholder="Enter Password"
                      value={confirmPassword}
                      onChange={onChange}
                    />
                    <label className="form-label" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Register | <i className="fa-solid fa-user-plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
