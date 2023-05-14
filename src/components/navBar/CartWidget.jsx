import React from "react";

const CartWidget = () => {
  return (
    <div className="ml-auto bg-dark pb-2 pr-2">
      <div className="d-flex justify-content-end m-3">
        <button type="button" className="btn btn-secondary position-relative">
          <i
            className="fa-solid fa-cart-shopping"
            style={{ color: "#f9fafb" }}
          ></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            4<span className="visually-hidden">Productos en tu carrito</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartWidget;
