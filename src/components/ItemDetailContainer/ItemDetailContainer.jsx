import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDoc,doc} from 'firebase/firestore'
import {db} from '../../services/firebase/firebase.config'
import { GlobalContext } from "../../context/GlobalContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const {setLoading}=useContext(GlobalContext)
  const [item, setItem] = useState(null);
  
  const {itemId} = useParams();

  useEffect(() => {
    setLoading(true)
    const detailDoc = doc(db,'products', itemId)
    getDoc(detailDoc)
    .then(res=>{
      const data = res.data()
      const detail={id:res.id, ...data}
      setItem(detail)
    })
    .catch(error=>{
      Swal.fire({
        icon: 'error',
        position: 'top-end',
        title: 'Oops...',
        text: 'Ocurrió un error, intenta nuevamente',
        color:'#212529',
        background:'#eeeeee',
        toast: true,
        timer:3000,
        showConfirmButton:false
      });
    })
    .finally(()=>{
      setLoading(false)
    })

  },[itemId, setLoading]);

  return (
  <div>
    <ItemDetail {...item}/>
  </div>
  );
};

export default ItemDetailContainer;
