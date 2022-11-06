import axios from "axios";
import React, { useContext, useState } from "react";
import AlertContext from "../../context/alert/alertContext";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;

  const alertContext = useContext(AlertContext)
  const {setAlert} = alertContext;

  const onChange = (e) =>{
    setUser({ ...user, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Registered')

    // Registration Integration logic
    if (!isPasswordMatched()) {
      setAlert("Password does not match.", 'danger')
    }

    // try {
    //   const response = await axios.post(
    //     "http://localhost:4000/api/v1/register",
    //     {
    //       name,
    //       email,
    //       password,
    //     }
    //   );

    //   console.log(response.data);
    //   alert(response.data?.message);
    //   clearField();
    // } catch (error) {
    //   console.log("error: ", error.response?.data);
    //   alert(error.response?.data?.message);
    // }
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
    <div className="container">
      <h1 className="text-center">Registration</h1>
      <form className="p-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="form-control"
            type="text"
            placeholder="Enter name"
            onChange={onChange}
            value={name}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">
            Email
          </label>
          <input
            id="registerEmail"
            name="email"
            className="form-control"
            type="email"
            placeholder="Enter email"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={email}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="registerPassword" className="form-label">
            Password
          </label>
          <input
            id="registerPassword"
            name="password"
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={password}
            required
            minLength={6}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            type="password"
            placeholder="Re-enter password"
            onChange={onChange}
            value={confirmPassword}
            required
            minLength={6}
          />
        </div>
        <button
          className="btn my-btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Register | <i className="fa-solid fa-user-plus" />
        </button>
      </form>
    </div>
  );
};

export default Register;
