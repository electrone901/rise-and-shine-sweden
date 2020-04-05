import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";
import logo from "../img/banner.png";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" className="img-fluid logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-right" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stories">
              Stories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stories">
              Guide lines
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resources">
              Resources
            </Link>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link className="btn btn-primary" to="/addResource">
              Post resources
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
