import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, amount) => {
    // creamos un nuevo objeto con los datos que recibimos por parámetros. Haciendo spread del producto.
    const newObj = { ...item, amount };
    // hacer una condicional, si el nuevo objeto está en el carrito
    if (isInCart(newObj.id)) {
      // vamos a hacer un map y sumar las cantidades, así no duplicamos
      cart.map((el) => {
        if (el.id === newObj.id) {
          el.amount += newObj.amount;
        }
        return el;
      });
    } else {
      setCart([...cart, newObj]);
    }
  };

  const removeItem = (id) => {
    const cartUpdated = cart.filter((item) => item.id !== id);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };

  const total = () => {
    const total = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.amount;
    }, 0);

    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, isInCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
