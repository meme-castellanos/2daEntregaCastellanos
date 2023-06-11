import React, { useContext, useState } from "react";
import ItemCount from "../itemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({id,title,img, brand, description, price, stock}) => {
  const [amountAdded, setAmountAdded] = useState(0);
  const {addItem} = useContext(CartContext)
  const handleOnAdd = (amount) => {
    setAmountAdded(amount);
    const item = {id, title, img, price, brand}
    addItem (item, amount)
  };
  const navigate = useNavigate();
  return (
    <div className=" container mb-0">
      <div className="container m-3 mb-0" style={{ maxWidth: "540" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt={title}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title p-3 text-danger-emphasis p-2">
                {title}
              </h5>
              <p className="card-text bg-black text-light mt-1 rounded-top rounded-bottom fs-5">
                {brand}
              </p>
              <p className="card-text">
                <span className="text-body-secondary text-wrap">{description}</span>
              </p>
            </div>
            <hr />
            <div className="card-footer">
              <p className="text-dark mb-0 fs-5">${price}</p>
              {amountAdded > 0 ? (
              <button className="card-link btn btn-outline-secondary m-1"
                onClick={() => navigate('/cart')} >Terminar compra</button>
              ) : (
                <ItemCount
                  initial={1}
                  stock={stock}
                  onAdd={handleOnAdd}
                />
              )}
              <button
                className="card-link btn btn-outline-secondary m-1"
                onClick={() => navigate(-1)}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
