import React from "react";
import ItemCount from "../itemCount/ItemCount";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ id, titulo, imagen, marca, descripcion, precio, stock, categoria }) => {
  const navigate=useNavigate()
  return (
    <div>
      <div className="m-3" style={{maxWidth: "540"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imagen} className="img-fluid rounded-start" alt={titulo}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title p-3 text-danger-emphasis p-2">{titulo}</h5>
              <p className="card-text bg-black text-light mt-1 rounded-top rounded-bottom fs-5">
                {marca}
              </p>
              <p className="card-text">
                <span className="text-body-secondary">
                  {descripcion}
                </span>
              </p>
            </div>
            <hr/>
            <div className="card-footer">
              <p className="text-dark mb-0 fs-5">
                ${precio}
              </p>
              <ItemCount initial={1} stock={stock} onAdd={(count)=>console.log("cantidad agregada",count)}/>
              <button className="card-link btn btn-outline-secondary m-1" onClick={()=>navigate(-1)}>Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
