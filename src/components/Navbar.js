import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
} from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/about">{props.text}</a> */}
          <Link className="nav-link" to="/about">{props.text}</Link>
        </li>
     
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === "light"?"dark":"light"} mx-2`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>

      
    </div>
  </div>
</nav>
  )
}


Navbar.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set Title Here",
    text: "My name is Mandeep Singh"
}