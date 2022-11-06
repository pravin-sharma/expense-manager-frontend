import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async(event) =>{
    event.preventDefault();

    if(!isPasswordMatched()){
      return alert('Password does not match.')
    }

    try {
      const response = await axios.post('http://localhost:4000/api/v1/register', {
        name, email, password
      })
    
      console.log(response.data);
      alert(response.data?.message);
      clearField();
      
    } catch (error) {
      console.log('error: ',error.response?.data);
      alert(error.response?.data?.message);

    }

  }

  const isPasswordMatched = () =>{
    return password === confirmPassword;
  }

  const clearField = () =>{
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

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
            className="form-control"
            type="text"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">
            Email
          </label>
          <input
            id="registerEmail"
            className="form-control"
            type="email"
            placeholder="Enter email"
            aria-describedby="emailHelp"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div >
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            className="form-control"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            className="form-control"
            type="password"
            placeholder="Re-enter password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
        <button className="btn my-btn-primary" type="submit" onClick={(e)=>handleSubmit(e)}>
          Register | <i className="fa-solid fa-user-plus" />
        </button>
      </form>
    </div>
  );
};

export default Register;
