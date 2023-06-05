import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Error404 from "./components/pages/Error404";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Home from "./components/pages/Home";
import Checkout from "./components/pages/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path="item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
