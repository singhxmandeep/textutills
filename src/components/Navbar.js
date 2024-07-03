import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ title = "Set Title Here", text = "My name is Mandeep Singh", mode, toogleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{text}</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${mode === "light" ? "dark" : "light"} mx-2`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toogleMode: PropTypes.func.isRequired,
};
