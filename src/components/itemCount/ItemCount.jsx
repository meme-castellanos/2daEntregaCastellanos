import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const addItem = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const lessItem = () => {
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
          onClick={lessItem}
        >
          -
        </button>
        <p className="text-center text-secondary text-size-4 m-2">{count}</p>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={addItem}
        >
          +
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onAdd(count)}
          disabled={!stock}
        >
          Agregar al carrito{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
