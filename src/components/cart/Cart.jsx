import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {cart, clearCart, totalAmount, total} = useContext(CartContext)
  return (
    <div>Cart</div>
  )
}

export default Cart