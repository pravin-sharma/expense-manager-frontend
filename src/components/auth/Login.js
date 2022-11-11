import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

function Login() {
  const navigate = useNavigate();

  const { login, error, isAuthenticated, clearError } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
      clearError();
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) {
      setAlert("Login Successful", "success");
      navigate("/home");
      // clearField();
    }
  }, [isAuthenticated]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    login(formData);
  };

  const clearField = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Fragment>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <div className="">
                  <h2 className="fw-bold mb-2 text-uppercase text-white">
                    Login
                  </h2>
                  <p className="text-white-50 mb-5 text-white">
                    Please enter your login and password!
                  </p>

                  <div className="form-floating form-outline form-white mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email"
                      value={email}
                      onChange={onChange}
                    />
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
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

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Login | <i className="fa-solid fa-key" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
