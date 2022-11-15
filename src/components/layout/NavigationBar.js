import React from "react";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { NavLink } from "react-router-dom";
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
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "btn me-4 btn-light" : " btn me-4 btn-outline-light"
        }
      >
        Expense
      </NavLink>
      <NavLink
        to="/category"
        className={({ isActive }) =>
          isActive ? "btn me-4 btn-light" : " btn me-4 btn-outline-light"
        }
      >
        Category
      </NavLink>
      <a onClick={onLogout} href="#!" className="btn btn-outline-light">
        Logout
      </a>
    </div>
  );

  const guestLink = (
    <div className="d-flex justify-content-center align-items-center">
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "btn me-4 btn-light" : " btn me-4 btn-outline-light"
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? "btn me-4 btn-light" : " btn me-4 btn-outline-light"
        }
      >
        Register
      </NavLink>
    </div>
  );

  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <div
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
        </div>

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
