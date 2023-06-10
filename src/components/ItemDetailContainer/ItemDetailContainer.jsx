import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDoc,doc} from 'firebase/firestore'
import {db} from '../../services/firebase/firebase.config'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  // const [loading,setLoading]=useState(true)
  const {itemId} = useParams();

  useEffect(() => {
    // setLoading(true)
    const detailDoc = doc(db,'products', itemId)
    getDoc(detailDoc)
    .then(res=>{
      const data = res.data()
      const detail={id:res.id, ...data}
      setItem(detail)
    })
    .catch(error=>{
      console.log(error);
    })
    /* .finally(()=>{
      setLoading(false)
    }) */

  },[itemId]);

  return (
  <div>
    <ItemDetail {...item}/>
  </div>
  );
};

export default ItemDetailContainer;
