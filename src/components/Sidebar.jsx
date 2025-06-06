import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <NavLink className="navbar-brand" to="/">
            <img src="/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <NavLink to="/" className={({ isActive }) => "nav-item nav-link d-flex align-items-center" + (isActive ? " active" : "")}>
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/library" className={({ isActive }) => "nav-item nav-link d-flex align-items-center" + (isActive ? " active" : "")}>
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </NavLink>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100">GO</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <div className="mt-3 d-flex justify-content-evenly">
            <a href="#">Cookie</a>
            <a href="#">Privacy</a>
            <a href="#">Policy</a>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
