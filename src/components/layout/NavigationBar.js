import React, { Fragment } from "react";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = ({ title, logo }) => {
  const { logout, isAuthenticated, user } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);
  // const navigate = useNavigate();

  const onLogout = () => {
    logout();
    setAlert("Logged Out Successfully", "warning");
    // TODO: instead of navigate use private route
    // navigate("/login");
  };

  const AuthLink = (
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-light me-4">Welcome, {user?.name}</div>
      <a onClick={onLogout} href="#!" className="btn btn-outline-danger">
        Logout
      </a>
    </div>
  );

  const guestLink = (
    <div className="d-flex justify-content-center align-items-center">
      <Link className="btn me-4 btn-outline-light" to="/login">
        Login
      </Link>
      <Link className="btn me-4 btn-outline-light" to="/register">
        Register
      </Link>
    </div>
  );

  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <a
          className="navbar-brand text-light d-flex align-items-center justify-content-between"
          href="#home"
        >
          <img
            src={logo}
            alt="Logo"
            width="24"
            height="24"
            className="d-inline-block me-1"
          />
          {title}
        </a>
        {!isAuthenticated && guestLink}
        {isAuthenticated && AuthLink}
      </div>
    </nav>
  );
};

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

NavigationBar.defaultProps = {
  title: "Expense Tracker",
  logo: "/logo.png",
};

export default NavigationBar;
