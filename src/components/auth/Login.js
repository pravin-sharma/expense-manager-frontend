import React, { useState } from "react";
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
      clearField();
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
    <div className="container">
      <h1 className="text-center">Login</h1>
      <form className="p-4">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            aria-describedby="emailHelp"
            value={email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn my-btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Login | <i className="fa-solid fa-key" />
        </button>
      </form>
    </div>
  );
}

export default Login;
