import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("logged in");

    // Login backend integration logic
    // try {
    //   const response = await axios.post("http://localhost:4000/api/v1/login", {
    //     email,
    //     password
    //   });

    //   console.log(response);
    //   alert(response.data?.message);
    //   clearField();
    //   // set token in local storage
    //   localStorage.setItem('token', response.data?.token)
    //   //TODO: attach a bearer token while sending back in header
    //   //TODO: redirect to home

    // } catch (error) {
    //   console.log("error: ", error.response?.data);
    //   alert(error.response?.data?.message);
    // }
  };

  const clearField = () => {
    setUser({
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
