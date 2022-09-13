import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop/Shop.js";
import Cart from "./components/Cart";
import Item from "./components/Shop/Item.js";
// import Catalog from "./components/Shop/catalog.json";
// import Product from "./components/Shop/Product.js"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  //   const images = require.context("./images", true);
  // let img = images("./" + item.imgs[0]).default;
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);

  function addItemToCart(item) {
    const items = shoppingCart.findIndex((i) => i.id === item.id);
    if (items > -1) {
      const newCart = shoppingCart.slice();
      newCart[items].quantity++;

      setShoppingCart(newCart);
    } else {
      setShoppingCart([...shoppingCart, item]);
    }
    console.log("it works");
    // console.log(shoppingCart)
  }

  function removeItemFromCart(item) {
    const items = shoppingCart.findIndex((i) => i.id === item.id);
    if (items > -1) {
      const newCart = shoppingCart.slice();
      newCart[items].quantity--;

      setShoppingCart(newCart);
    } else {
    }
    if (item.quantity === 0) {
      if (window.confirm("Remove item from cart?")) {
        removeEntireItem(item);
      } else {
        item.quantity = 1;
      }
    } else {
    }
    console.log("it works");
    // console.log(shoppingCart)
  }
  function removeEntireItem(item) {
    const newCart = shoppingCart.filter((i) => i.id !== item.id);

    setShoppingCart(newCart);
    console.log(newCart);
  }

  const handleViewItem = (itemID) => {
    setSelectedItemId(itemID);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/Shop"
            element={<Shop handleViewItem={handleViewItem} />}
          />
          <Route
            path="/Cart"
            element={
              <Cart
                shoppingCart={shoppingCart}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
                removeEntireItem={removeEntireItem}
              />
            }
          />
          <Route
            exact
            path="/Shop/:id"
            element={
              <Item addItemToCart={addItemToCart} itemID={selectedItemId} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
