import React from "react";
import logo from "../navBar/Assets/bsLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="container-fluid w-100 bg-dark">
      <div className="d-flex flex-column bg-dark align-items-center w-100">
        <div className="col justify-content-center">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <p className="text-light fs-6 text-white-50">Boutique Scents</p>
        </div>
        <div className="col justify-content-center m-1">
          <i
            className="fa-brands fa-instagram fa-2x m-2"
            style={{ color: "#a6a6a6", cursor: "pointer" }}
          ></i>
          <i
            className="fa-brands fa-whatsapp fa-2x m-3"
            style={{ color: "#a6a6a6", cursor: "pointer" }}
          ></i>
        </div>
        <div className="col justify-content-center">
          <p className="text-light fs-6 text-white-50">
            Encontranos en Av. Siempreviva 742
          </p>
          <p className="text-light fs-6 text-white-50">Córdoba-Argentina</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
