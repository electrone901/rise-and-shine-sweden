import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";
import logo from "../img/banner.png";

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-color">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="img-fluid logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/stories">
                Stories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/stories">
                Guide lines
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/resources">
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn bg-warning" to="/addResource">
                Post resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
