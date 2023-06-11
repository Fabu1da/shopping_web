import "./App.css";
import { Navbar, Cart } from "./components";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { CartContext } from "./components/helper/CartContext";
import Product from "./components/product/Product";
import Home from "./components/home/Home";

function App() {
  const [cart, setCart] = useState([]);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <CartContext.Provider value={{ setCart, cart }}>
      <Navbar cart={cart} isToggled={isToggled} setIsToggled={setIsToggled} />
      <Routes>
        <Route path="product/:id" element={<Product />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Cart isToggled={isToggled} setIsToggled={setIsToggled} />
    </CartContext.Provider>
  );
}

export default App;
