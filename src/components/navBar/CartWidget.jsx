import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/cart" style={{ display: cart.length > 0 ? "block" : "none" }}>
      <div className="ml-auto bg-dark pb-2 pr-2 m-5">
        <div className="d-flex justify-content-end">
          <button type="button" className="btn border border-0 position-relative">
            <i
              className="fa-solid fa-cart-shopping fa-2x"
              style={{ color: "#f9fafb" }}
            ></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}{" "}
              <span className="visually-hidden">Productos en tu carrito</span>
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
