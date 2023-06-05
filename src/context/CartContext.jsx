import { createContext, useState } from "react";

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const addItem = (item, amount)=>{
        if (isInCart (item.id)){
            setCart(cart.map (product=> {
                return product.id === item.id ? {product, amount : product.amount + amount}:product}));
        } else {
            setCart([...cart,{item,amount}]);
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter (item => item.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find (product => product.id === id) ? true : false;
    }

    const Total = () => {
        const total = cart.reduce((accumulator, { item, amount }) => {
          return accumulator + item.precio * amount;
        }, 0);
      
        return total;
      };
 
    

    return (
        <CartContext.Provider value ={{cart, addItem, removeItem, clearCart, isInCart, Total}}>
            {children}
        </CartContext.Provider>
    )

}