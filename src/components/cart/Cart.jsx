import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart, Total } = useContext(CartContext);
  const navigate = useNavigate();
  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <Link to="/">Ir a productos</Link>
      </div>
    );
  }
  return (
    <div>
      {cart.map((product, key) => (
        <div>
          <CartItem key={product.id} {...product} />
          <hr />
        </div>
      ))}
      <h3>Total: {Total()} </h3>
      <button className="btn btn-secondary m-2" onClick={() => clearCart()}>
        Vaciar Carrito
      </button>
      <button
        className="btn btn-secondary m-2"
        onClick={() => navigate("/checkout")}
      >
        Finalizar compra
      </button>
    </div>
  );
};

export default Cart;
