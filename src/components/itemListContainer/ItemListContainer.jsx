import React, { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import { bringData, getCategory } from "../../promise";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryId} = useParams()

  useEffect(() => {
    const asyncFun = categoryId ? getCategory : bringData
    asyncFun(categoryId)
    .then (res =>{setItems(res)})
    .catch (err=>{console.log(err);})
    
  }, [categoryId]);

  return (
    <div className="container-fluid mb-2">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
