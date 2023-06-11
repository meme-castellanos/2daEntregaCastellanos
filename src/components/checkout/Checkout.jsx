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
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { setLoading } = useContext(GlobalContext);
  const { cart, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const newOrder = async ({ lastName, firstName, phone, email, adress }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          firstName,
          lastName,
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
        Swal.fire({
          icon: "error",
          position: "top-end",
          title: "Oops...",
          text: "No tenemos suficiente stock de un producto del carrito!",
          color: "#212529",
          background: "#eeeeee",
          toast: true,
          timer: 3000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ha ocurrido un error, intenta nuevamente",
        color: "#a6be06",
        timer: 5000,
      });
    } finally {
      setLoading(false);
    }
  };
  if (orderId) {
    return (
      <div className="container-fluid bg-dark m-6 d-flex flex-column" style={{ height: "50vh" }}>
        <h1 className="text-light bg-dark m-3 mt-0">
          Muchas gracias por tu compra!
        </h1>{" "}
        <h3 className="text-light bg-dark m-3">
          El número de referencia para porsteriores consultas, es: {orderId}
        </h3>
        <i
          className="fa-solid fa-bag-shopping fa-5x m-3"
          style={{ color: "#a6a6a6" }}
        ></i>
        <button
          className="card-link btn btn-outline-secondary m-1"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
    );
  }
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={newOrder} />
    </div>
  );
};

export default Checkout;
