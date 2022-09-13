import { useState } from "react";
import Catalog from "./Shop/catalog.json";

const Cart = ({
  shoppingCart,
  addItemToCart,
  removeItemFromCart,
  removeEntireItem,
}) => {
  const cartItems = shoppingCart.map((item) => {
    function handleChange(e, item) {
      if (e.target.value > item.quantity) {
        addItemToCart(item);
        console.log(shoppingCart);
      } else {
        removeItemFromCart(item);
      }
    }

    const images = require.context("./images", true);
    let img = images("./" + item.imgs);

    return (
      <div key={item.id}>
        <img src={img} alt="" />
        <div> {item.name}</div>
        <div>${item.price * item.quantity}</div>
        <div>
          <input
            type="number"
            min="0"
            max="99"
            value={item.quantity}
            onChange={(e) => handleChange(e, item)}
          />
          <div>
            <div
              onClick={() => item.quantity > 1 && removeItemFromCart(item)}
            />
          </div>

          <div>
            <div onClick={() => item.quantity <= 99 && addItemToCart(item)} />
          </div>
        </div>

        <button onClick={() => removeEntireItem(item)}>Remove item</button>
      </div>
    );
  });

  return (
    <div>
      <h1> Cart</h1>
      {cartItems}
      <p>
        Total:{" "}
        ${shoppingCart
          .reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0)
          .toFixed(2)}
      </p>
      <button> Check Out</button>

    </div>
  );
};

export default Cart;
