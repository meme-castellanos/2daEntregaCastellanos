import React, { useState } from "react";
import './checkoutForm.css'


const CheckoutForm = ({ onConfirm }) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      firstName,
      lastName,
      phone,
      email,
      adress,
    };
    onConfirm(userData);
  };
  return (
    <div>
      <form onSubmit={handleConfirm} className="container">
      <div className="d-flex flex-column align-items-center">
        <label>Apellido
            <input type='text' value={lastName} onChange={({target})=>setLastName(target.value)} required/>
        </label>
        <label>Nombre
            <input type='text' value={firstName} onChange={({target})=>setFirstName(target.value)} required/>
        </label>
        <label>Teléfono
            <input type='number' value={phone} onChange={({target})=>setPhone(target.value)} required/>
        </label>
        <label>Email
            <input type='email' value={email} onChange={({target})=>setEmail(target.value)}required/>
        </label>
        <label>Dirección
            <input type='text' value={adress} onChange={({target})=>setAdress(target.value)} required/>
        </label>
        <div className="container m-3">
            <button className="btn btn-outline-secondary" type="submit">Confirmar Compra</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
