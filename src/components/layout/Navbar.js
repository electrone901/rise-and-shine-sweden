import React from "react";
import styles from "./Footer.module.css";
import logo from "../img/banner.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" className="img-fluid logo" />
      </a>

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
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/stories">
              Stories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/stories">
              Guide lines
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resources">
              Resources
            </a>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <a className="btn btn-primary" href="/addResource">
              Post resources
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
