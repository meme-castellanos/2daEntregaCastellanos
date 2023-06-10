import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebase.config";
import {
  Timestamp,
  writeBatch,
  getDocs,
  query,
  where,
  documentId,
  addDoc,
  collection,
} from "firebase/firestore";
import CheckoutForm from "../checkoutForm/CheckoutForm";
import { GlobalContext } from "../../context/GlobalContext";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { setLoading } = useContext(GlobalContext);
  const { cart, total, clearCart } = useContext(CartContext);
  const newOrder = async ({ name, phone, email, adress }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
          adress,
        },
        items: cart,
        total: total(),
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const colRef = collection(db, "products");
      const prodsFromDb = await getDocs(
        query(colRef, where(documentId(), "in", ids))
      );
      const { docs } = prodsFromDb;
      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const prodInCart = cart.find((prod) => prod.id === doc.id);
        const prodAmount = prodInCart?.amount;
        if (stockDb >= prodAmount) {
          batch.update(doc.ref, {
            stock: stockDb - prodAmount,
          });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Hay productos sin stock"); //alerta
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    if (orderId) {
      return <h1>El id de su orden es: {orderId}</h1>; //alerta?
    }
  }
    return (
      <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={newOrder}/>
      </div>
    );
  
}

export default Checkout;
