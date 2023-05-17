import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid w-100">
      <img
        className=""
        src="https://www.dpmarketingcommunications.com/wp-content/uploads/2016/11/404-Page-Featured-Image.png"
        alt="Not found"
      />
      <div className="d-flex row">
        <div className="col">
          <h5>La página que solicitas no existe o fue movida</h5>
          <h5>¿Quieres seguir viendo nuestros productos? </h5>
        </div>
        <div className="col">
          <button
            className="btn btn-outline-secondary btn-lg"
            onClick={() => navigate("/")}
          >Volver</button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
