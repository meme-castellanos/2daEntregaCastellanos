import React, { useState } from "react";
import Swal from "sweetalert2";
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const handleOnClick= () =>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se agregó el producto al carrito',
      color:'#212529',
      background:'#eeeeee',
      showConfirmButton: false,
      toast: true,
      timer: 2000
    })
  }

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  return (
    <div >
      <div className="d-flex column justify-content-center m-3">
        <button
          type="button"
          className="btn border border-0"
          onClick={decrease}
        >
          -
        </button>
        <p className="text-center text-secondary text-size-4 m-2">{count}</p>
        <button
          type="button"
          className="btn border border-0"
          onClick={increase}
        >
          +
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn border border-0"
          onClick={() => {
            handleOnClick();
            onAdd(count);
          }}
          disabled={stock<0} 
        >
          <i
              className="fa-solid fa-cart-shopping"
              style={{ color: "#212529" }}
            ></i> 
        </button>
        
            
      </div>
    </div>
  );
};

export default ItemCount;
