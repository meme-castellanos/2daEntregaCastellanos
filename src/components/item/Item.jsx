import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({id,title,img, brand, description, price, stock, category}) => {

  const navigate= useNavigate();
  return (

      <div className="card m-2 mt-3" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top img-fluid img-thumbnail mt-3" alt={title} />
        <div className="card-body">
          <h5 className="card-title card text-bg-dark mb-3">{brand}</h5>
          <p className="card-text">
            {title}
          </p>
        </div>
        <div className="card-body">
          <h5 className="text-dark mb-0">${price}</h5>
          <button onClick={() => navigate(`/item/${id}`)} className="card-link btn btn-outline-secondary m-1">Ver más</button>
        </div>
      </div>
    
  );
};

export default Item;
