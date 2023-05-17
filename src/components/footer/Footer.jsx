import React from "react";
import logo from "../navBar/Assets/bsLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="d-flex row bg-dark align-items-center">
        <div className="col justify-content-center">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <p className="text-light fs-6 text-white-50">Boutique Scents</p>
        </div>
        <div className="col justify-content-center m-3">
          <i
            className="fa-brands fa-instagram fa-3x m-4"
            style={{ color: "#a6a6a6", cursor: "pointer" }}
          ></i>
          <i
            className="fa-brands fa-whatsapp fa-3x m-4"
            style={{ color: "#a6a6a6", cursor: "pointer" }}
          ></i>
        </div>
        <div className="col justify-content-center">
          <p className="text-light fs-6 text-white-50">
            Encontranos en Av. Siempreviva 742
          </p>
          <p className="text-light fs-6 text-white-50">Córdoba-Argentina</p>
        </div>
        <div className="col justify-content-center  m-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4680.621724714193!2d-64.2195182898916!3d-31.367782850786625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299180096466b%3A0x3df59ed0ca6a8c1b!2sDinosaurio%20Mall!5e0!3m2!1ses!2sar!4v1684331070733!5m2!1ses!2sar"
            width="200"
            height="150"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
