import axios from "axios";
import React, { useState } from "react";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/login", {
        email,
        password
      });

      console.log(response);
      alert(response.data?.message);
      clearField();
      // set token in local storage
      localStorage.setItem('token', response.data?.token)
      //TODO: attach a bearer token while sending back in header
      //TODO: redirect to home

    } catch (error) {
      console.log("error: ", error.response?.data);
      alert(error.response?.data?.message);
    }
  };

  const clearField = () => {
    setEmail("");
    setPassword("");
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
            placeholder="Email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
