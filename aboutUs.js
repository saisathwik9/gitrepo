import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { db } from "./db-config/database";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      let cartItems = snapshot.docs.map((product) => ({
        id: product.id,
        data: product.data(),
      }));

      setCartItems(cartItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route>
      </Router>
    </>
  );
}

export default App;
