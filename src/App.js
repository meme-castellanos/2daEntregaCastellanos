import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Error404 from "./components/pages/Error404";
import AboutUs from "./components/pages/AboutUs";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Home from "./components/pages/Home";
import Checkout from "./components/checkout/Checkout";
import { GlobalProvider } from "./context/GlobalContext";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <CartProvider>
            <NavBar />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<ItemListContainer /> } />
                <Route path="item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </Layout>
            <Footer />
          </CartProvider>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
