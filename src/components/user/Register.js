import React from "react";
import { Form } from "react-bootstrap";

const Register = () => {
  return (
    <div className="container">
      <h1 className="text-center">Registration</h1>
      <Form className="border-start p-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            className="form-control"
            type="text"
            placeholder="Enter name"
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
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          />
        </div>
        <button className="btn my-btn-primary">Register | <i className="fa-solid fa-user-plus" /></button>
      </Form>
    </div>
  );
};

export default Register;
