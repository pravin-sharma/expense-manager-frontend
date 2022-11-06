import React from "react";
import PropTypes from "prop-types";

const NavigationBar = ({title, logo}) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container">
        <a className="navbar-brand text-light d-flex align-items-center justify-content-between" href="#home">
          <img
            src={logo}
            alt="Logo"
            width="24"
            height="24"
            className="d-inline-block me-1"
          />
          {title}
        </a>
      </div>
    </nav>
  );
}

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
}

NavigationBar.defaultProps = {
  title: 'Expense Tracker',
  logo: '/logo.png'
}


export default NavigationBar;
