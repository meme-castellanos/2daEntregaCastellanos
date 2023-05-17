import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({id,titulo,imagen, marca, descripcion,precio,stock,categoria}) => {

  const navigate= useNavigate();
  return (

      <div className="card m-2 mt-3" style={{ width: "18rem" }}>
        <img src={imagen} className="card-img-top img-fluid" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title card text-bg-dark mb-3">{marca}</h5>
          <p className="card-text">
            {titulo}
          </p>
        </div>
        <div className="card-body">
          <h5 className="text-dark mb-0">${precio}</h5>
          <button onClick={() => navigate(`/item/${id}`)} className="card-link btn btn-outline-secondary m-1">Ver más</button>
        </div>
      </div>
    
  );
};

export default Item;
