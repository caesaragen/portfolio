import React from "react";
import "../styles/header.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Joel Ragen Aduma
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {/* <button type="button" class="btn btn-info me-2">
              Signup
            </button>
            <button type="button" class="btn btn-light">
              Login
            </button> */}
            {/* <a className="nav-link active" aria-current="page" href="#">Blog</a>
        <a className="nav-link" href="#">Features</a> */}
        <a className="nav-link text-dark mx-2" href="#">Projects</a>
        <a className="nav-link text-dark disabled" href="#" tabindex="-1" aria-disabled="true">Blog</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
