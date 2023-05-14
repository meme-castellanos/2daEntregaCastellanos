import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand" >
            Navbar
          </p>
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
            <div className="navbar-nav">
              <p className="nav-link" aria-current="page" >
                Home
              </p>
              <p className="nav-link" >
                Features
              </p>
              <p className="nav-link" >
                Pricing
              </p>
            </div>
          </div>
        </div>
        <CartWidget/>
      </nav>
    </div>
  );
};

export default NavBar;
