import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Error404 from "./components/pages/Error404";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error404/>} />
        </Routes>
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
