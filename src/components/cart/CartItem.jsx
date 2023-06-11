import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, title, img, price, brand, amount }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="container">
      <div
        className="card m-2 mx-auto p-10"
        style={{ maxWidth: "600", border: "none" }}
      >
        <div className="row g-0 align-items-center">
          <div className="col-md-4 w-25">
            <img src={img} className="img-fluid rounded-start" alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-subtitle">{brand}</h6>
              <p className="card-text">Precio: ${price}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Cantidad: {amount}
                </small>
              </p>
            </div>
            <div>
              <button
                onClick={() => removeItem(id)}
                className="btn btn-sm border border-0 position-absolute bottom-0 end-0 m-2"
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
