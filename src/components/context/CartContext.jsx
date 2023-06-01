import { createContext, useState } from "react";

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    console.log(cart)

    const addItem = (item, amount)=>{
        if (!isInCart (item.id)){
            setCart(prev=>[...prev, {item, amount}])
        } else {
            console.log("El producto ya fue agregado")
        }
    }

    const deleteItem = (itemId) => {
        const cartUpdated = cart.filter (prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some (prod => prod.Id === itemId)
    }

    return (
        <CartContext.Provider value ={{cart, addItem, deleteItem, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )

}