import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item: { id, titulo, imagen, precio, marca }, amount }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="card m-2 mx-auto p-10" style={{ maxWidth: "600", border:'none' }}>
      <div className="row g-0 align-items-center">
        <div className="col-md-4 w-25">
          <img src={imagen} className="img-fluid rounded-start" alt={titulo} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <h6 className="card-subtitle">{marca}</h6>
            <p className="card-text">Precio: ${precio}</p>
            <p className="card-text">
              <small className="text-body-secondary">Cantidad: {amount}</small>
            </p>
          </div>
          <div>
            <button
              onClick={() => removeItem(id)}
              className="btn btn-secondary btn-sm position-absolute bottom-0 end-0 m-2"
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
