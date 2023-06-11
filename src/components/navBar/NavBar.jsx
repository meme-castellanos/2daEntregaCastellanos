import React from "react";
import CartWidget from "./CartWidget";
import logo from "./Assets/bsLogo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg container-fluid" data-bs-theme="dark">
        <div className="container-fluid d-flex align-items-center">
          <Link to= {'/'}><img src={logo} alt="logo" /></Link>
          <p className="navbar-brand fs-5">Boutique Scents</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={'/'}
                  className="nav-link active fs-5"
                  style={{
                    backgroundColor: "transparent",
                    color: "whitesmoke",
                    border: "none",
                  }}
                  aria-current="page"
                >
                  Inicio
                </NavLink>{" "}
              </li>
              <li className="nav-item mx-auto">
                <NavLink to={'/aboutUs'}><button
                  className="nav-link active fs-5"
                  style={{
                    backgroundColor: "transparent",
                    color: "whitesmoke",
                    border: "none",
                  }}
                  aria-current="page"
                >
                  Sobre Nosotros
                </button></NavLink>
              </li>
              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle fs-5"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </p>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to={'/category/femeninas'}
                      className="dropdown-item btn btn-outline-secondary fs-6"
                      type="button"
                    >
                      Fragancias Femeninas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={'/category/masculinas'}
                      className="dropdown-item btn btn-outline-secondary fs-6"
                      type="button"
                    >
                      Fragancias Masculinas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={'/category/maquillajes'}
                      className="dropdown-item btn btn-outline-secondary fs-6"
                      type="button"
                    >
                      Maquillajes
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
