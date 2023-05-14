import React, { useEffect, useState } from "react";
import { getItemId } from "../../promise";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItemId("4")
      .then((res) => {
        setItem(res);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
  <div>
    <ItemDetail {...item}/>
  </div>
  );
};

export default ItemDetailContainer;
