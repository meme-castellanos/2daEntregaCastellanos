import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

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
          className="btn btn-outline-secondary"
          onClick={decrease}
        >
          -
        </button>
        <p className="text-center text-secondary text-size-4 m-2">{count}</p>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={increase}
        >
          +
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onAdd(count)}
          disabled={stock<0}
        >
          Agregar al carrito{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
