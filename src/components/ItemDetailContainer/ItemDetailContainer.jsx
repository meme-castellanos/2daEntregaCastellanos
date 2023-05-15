import React, { useEffect, useState } from "react";
import { getItemId } from "../../promise";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const {itemId} = useParams();

  useEffect(() => {
    getItemId(itemId)
      .then((res) => {
        setItem(res);
      })
      .catch((err) => console.log(err));
  },[itemId]);

  return (
  <div>
    <ItemDetail {...item}/>
  </div>
  );
};

export default ItemDetailContainer;
