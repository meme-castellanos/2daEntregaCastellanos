import React from "react";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ id, titulo, imagen, marca, descripcion, precio, stock, categoria }) => {
  return (
    <div>
      <div className="card mb-3" style={{maxWidth: "540"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imagen} className="img-fluid rounded-start" alt={titulo}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">
                {marca}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {descripcion}
                </small>
              </p>
            </div>
            <div className="card-footer">
              <p className="text-body-secondary">
                ${precio}
              </p>
              <ItemCount initial={1} stock={stock} onAdd={(count)=>console.log("cantidad agregada",count)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
