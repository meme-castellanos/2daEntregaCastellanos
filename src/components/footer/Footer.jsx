import React from "react";
import logo from "../navBar/Assets/bsLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="container-fluid bg-dark">
      <div className="d-flex flex-column bg-dark align-items-center">
        <div className="col justify-content-center m-0">
          <Link to={"/"} >
            <img className="m-0" src={logo} alt="logo" />
          </Link>
          <p className="text-light fs-6 text-white-50 m-0">Boutique Scents</p>
        </div>
        <div className="col justify-content-center m-0">
          <i
            className="fa-brands fa-instagram fa-2x m-1"
            style={{ color: "#a6a6a6", cursor: "pointer" }}
          ></i>
          <i
            className="fa-brands fa-whatsapp fa-2x m-1"
            style={{ color: "#a6a6a6", cursor: "pointer" }}
          ></i>
        </div>
        <div className="col justify-content-center m-0">
          <p className="text-light fs-6 text-white-50 m-0">
            Encontranos en Av. Siempreviva 742
          </p>
          <p className="text-light fs-6 text-white-50 m-0">Córdoba-Argentina</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
