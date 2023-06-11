import React, { useEffect, useState, useContext } from "react";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import {db} from '../../services/firebase/firebase.config';
import {getDocs, collection, query, where} from 'firebase/firestore'
import { GlobalContext } from "../../context/GlobalContext";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {setLoading}=useContext(GlobalContext)
  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)
    const colCategory = categoryId
    ? query(collection(db,'products'), where ('category', '==', categoryId)) : collection(db,'products')
    getDocs(colCategory)
    .then(res=> {
      const prodByCat=res.docs.map(doc=> {const data=doc.data()
        return {id:doc.id, ...data}
      })
        setItems(prodByCat)
    })
    .catch(error=>{
      console.log(error);
    })
   .finally(()=>{
      setLoading(false)
    })
  }, [categoryId]);

  return (
    <div className="container-fluid mb-0">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
