import React, { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import { bringData } from "../../promise";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    bringData()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
