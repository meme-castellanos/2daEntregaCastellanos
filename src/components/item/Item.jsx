import React from "react";

const Item = ({id,titulo,imagen,descripcion,precio}) => {

  return (

      <div className="card m-2 mt-3" style={{ width: "18rem" }}>
        <img src={imagen} className="card-img-top img-fluid" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">
            {descripcion}
          </p>
        </div>
        <div className="card-body">
          <h5 className="text-dark mb-0">${precio}</h5>
          {/*Acá me tiene que llevar al itemDetail usando el id*/}
          <button className="card-link">
            Ver más
          </button>
        </div>
      </div>
    
  );
};

export default Item;
