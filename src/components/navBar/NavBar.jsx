import React from "react";
import CartWidget from "./CartWidget";
import logo from "./Assets/bsLogo.png";
import NavItems from "./NavItems";
import NavDrop from "./NavDrop";
const NavBar = () => {
  const navText = ["Inicio", "Contacto", "Sobre Nosotros"];
  const dropText = [
    "Fragancias Femeninas",
    "Fragencias Masculinas",
    "Maquillajes",
  ];
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid d-flex align-items-center">
          <img src={logo} alt="logo" />
          <p className="navbar-brand">Beauty Scents</p>
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
              {navText.map((texto, index) => (
                <NavItems key={index} navItem={texto} />
              ))}
              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </p>
                <ul className="dropdown-menu">
                  {dropText.map((texto, index) => (
                    <NavDrop key={index} categoria={texto}/>
                  ))}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
