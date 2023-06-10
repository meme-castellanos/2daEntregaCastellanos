import React, { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name,
      phone,
      email,
      adress,
    };
    onConfirm(userData);
  };
  return (
    <div>
      <form onSubmit={handleConfirm}>
        <label>Nombre y Apellido
            <input type='text' value={name} onChange={({target})=>setName(target.value)}/>
        </label>
        <label>Teléfono
            <input type='number' value={phone} onChange={({target})=>setPhone(target.value)}/>
        </label>
        <label>Email
            <input type='email' value={email} onChange={({target})=>setEmail(target.value)}/>
        </label>
        <label>Dirección
            <input type='text' value={adress} onChange={({target})=>setAdress(target.value)}/>
        </label>
        <div>
            <button type="submit">Crear Orden</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
