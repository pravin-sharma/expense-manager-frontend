import React from "react";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { Link } from "react-router-dom";
import ExpenseContext from "../../context/expense/expenseContext";
import CategoryContext from "../../context/category/categoryContext";

const NavigationBar = ({ title, logo }) => {
  const { logout, isAuthenticated, user } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);
  const { clearExpenses } = useContext(ExpenseContext);
  const { clearCategories } = useContext(CategoryContext);
  

  const onLogout = () => {
    logout();
    clearExpenses();
    clearCategories();
    
    setAlert("Logged Out Successfully", "warning");
  };

  const AuthLink = (
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-light me-4">Welcome, {user?.name}</div>
      <Link className="btn me-4 btn-outline-success" to="/category">
        Category
      </Link>
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
        <Link
          className="navbar-brand text-light d-flex align-items-center justify-content-between"
          href="#home"
          to="/home"
        >
          <img
            src={logo}
            alt="Logo"
            width="24"
            height="24"
            className="d-inline-block me-1"
          />
          {title}
        </Link>

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
